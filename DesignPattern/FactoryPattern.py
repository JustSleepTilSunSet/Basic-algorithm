"""
    - [x] Factory pattern.
    The pattern shows factory pattern.
    Concept of the pattern is:
        1. Centralize the instantiation logic for all concrete classes in a Factory, so that the caller only needs to pass a class identifier to the Factory to receive the corresponding instance.
    The factory have advantages:
        1. Call the Factory instead of specifying which class to instantiate directly.  
        2. Easy to add a new report to the system, just registering it in the Factory.
        3. Consolidates management of all concrete classes in one function.
        4. Enhance the readability of the code.
"""
from abc import ABC, abstractmethod
from datetime import date
from enum import Enum

class ReportType(Enum):
    SALES = "SALES"
    ACCOUNT = "ACCOUNT"

class Report(ABC):
    def __init__(self, start_date: date, end_date: date):
        self.start_date = start_date
        self.end_date = end_date
    @abstractmethod
    def generate(self) -> str:
        ...# don't care return.

class SalesReport(Report):
    def generate(self):
        return f"[Sales] {self.start_date}~{self.end_date}"

class AccountReport(Report):
    def generate(self):
        return f"[Account] {self.start_date}~{self.end_date}"

class ReportFactory:
    _creators = {
        ReportType.SALES: SalesReport,
        ReportType.ACCOUNT: AccountReport
    }
    @classmethod
    def create(cls,report_type:ReportType, **kwargs)->Report:
        creator = cls._creators.get(report_type)
        if not creator:
            raise ValueError("Not found type")
        return creator(**kwargs)

sales_report = ReportFactory.create(report_type=ReportType.SALES,start_date=date(2025,5,1),end_date=date(2025,5,2))
account_report = ReportFactory.create(report_type=ReportType.ACCOUNT,start_date=date(2025,5,1),end_date=date(2025,5,2))
print(sales_report.generate())
print(account_report.generate())