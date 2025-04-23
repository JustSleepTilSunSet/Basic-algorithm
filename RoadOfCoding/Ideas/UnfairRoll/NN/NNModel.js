// The code is simulate a NN Model.
// If you wanna add more hidden layer, you need to add layer2 function and add property to results in NNModel.
const training_data = [
    { x: 2, y: 0 },  // 不大於5
    { x: 4, y: 0 },
    { x: 6, y: 1 },  // 大於5
    { x: 7, y: 1 }
]
class NNModel {
    /**
    * @type number
    */
    constructor(input) {
        /**
        * @type number
        */
        this.input = input

        /**
        * @type {{ [key: number]: CallableFunction }}
        */
        this.funcs = {
            1: (value) => 2 * value,
            2: (value) => 2 * value + 1,
            3: (value1, total) => total += value1
        }

        /**
        * @type {{ [key: string]: number[] }}
        */
        this.results = {
            "layer1": []
        }
        this.output = undefined
    }

    layer1(neuron_count = 2, tag = "layer1") {
        if (neuron_count == 0)
            return this
        this.results[tag].push(this.funcs[neuron_count](this.input))
        neuron_count--
        return this.layer1(neuron_count)
    }

    output_layer() {
        this.output = 0
        for (let key of Object.keys(this.results)) {
            for (let index = 0; index < this.results[key].length; index++) {
                this.output = this.funcs[3](this.results[key][index], this.output)
            }
        }
        return this.output
    }
}
result = new NNModel(3).layer1().output_layer()
console.log(result)