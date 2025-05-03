"""
    - [x] Strategy pattern.
    The pattern shows Strategy pattern.
     ## Concept:
  1. The pattern treats calculation algorithms as independent and interchangeable.
  2. This allows you to pick a specific product and apply a corresponding discount strategy without changing the product's core logic.

"""
from abc import ABC, abstractmethod
from typing import Optional

class DiscountStrategy(ABC):
    @abstractmethod
    def calculate(self, total: float) -> float:
        ...

class NoDiscount(DiscountStrategy):
    def calculate(self, total):
        return total

class TenPercentOff(DiscountStrategy):
    def calculate(self, total: float) -> float:
        return total * 0.9

class SpecialFestivalDiscount(DiscountStrategy):
    def calculate(self, total: float) -> float:
        return total - 50 if total >= 300 else total

class Product:
    def __init__(self,strategy:DiscountStrategy | None = None):
        self.strategy = strategy or NoDiscount()

    def price(self,origin_amount:float):
        return self.strategy.calculate(total = origin_amount)

print(Product(strategy = SpecialFestivalDiscount()).price(origin_amount = 100))
print(Product(strategy = TenPercentOff()).price(origin_amount = 200))
print(Product().price(origin_amount = 200))