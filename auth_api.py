from playwright.sync_api import APIRequestContext


class AuthAPI:
    BASE_URL = "https://restful-booker.herokuapp.com"

    def __init__(self, request_context):
        self.request_context = request_context

    def get_token(self, credentials):
        return self.request_context.post(f"{self.BASE_URL}/auth", data=credentials)

