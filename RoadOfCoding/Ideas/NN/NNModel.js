// The code is simulate a NN Model.
// If the x gt 5 Neuron1 approach 1 ,and other one approach 0.
class Label{
    GREAT=1
    LESS=0

}
const training_data = [
    { x: 2, y: Label.LESS },
    { x: 4, y: Label.LESS },
    { x: 6, y: Label.GREAT },
    { x: 7, y: Label.GREAT }
]

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function sigmoid_derivative(x) {
    return x * (1 - x);
}

class NNModel {
    /**
    * @type number
    */
    constructor() {
        this.weights = [Math.random(), Math.random()];
        this.biases = [Math.random(), Math.random()];
        this.learningRate = 0.1;
        this.output = undefined
    }


    predict(input) {
        this.results = this.weights.map((w, i) => {
            const z = input * w + this.biases[i];
            console.log(`Neuron ${i}: z = ${z}`);
            return sigmoid(z);
        });
        return this.results;
    }

    output(){
        return Math.sum(this.results).toFixed(3)
    }
    train(data, epochs = 1000) {
        for (let epoch = 0; epoch < epochs; epoch++) {
            let total_loss = 0;

            for (const { x, y } of data) {
                // forward propagnation.
                console.log(x)
                let result = this.predict(x)
                console.log("layer_outputs:",result)

                // Prediction.
                const pred = result.reduce((a, b) => a + b, 0);
                const error = y - pred;
                total_loss += error ** 2;

                // backward propagnation.
                result.forEach((out, i) => {
                    const d_pred = error * sigmoid_derivative(out);
                    this.weights[i] += this.learningRate * d_pred * x;
                    this.biases[i] += this.learningRate * d_pred;
                });

            }

            if (epoch % 100 === 0) {
                console.log(`Epoch ${epoch} - Loss: ${total_loss.toFixed(4)}`);
            }
        }
        return this
    }
}
RawModel = new NNModel()
Trained_Model = RawModel.train(training_data)
console.log(Trained_Model.weights)
console.log("Predict 2:", Trained_Model.predict(2));// Predict 2: [ 0.04908674146377736, 0.008400010833163109 ]
console.log("Predict 4:", Trained_Model.predict(4));// Predict 4: [ 0.31351751745379347, 0.00014094424661271487 ]
console.log("Predict 6:", Trained_Model.predict(6));// Predict 6: [ 0.8016092877043689, 0.0000023457017118337182 ]
console.log("Predict 8:", Trained_Model.predict(8));// Predict 8: [ 0.9727875558346043, 3.903363726121484e-8 ]



