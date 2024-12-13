import pytest
from playwright.sync_api import sync_playwright


@pytest.fixture(scope="session")
def request_context():
    with sync_playwright() as p:
        request_context = p.request.new_context()
        yield request_context
        request_context.dispose()
