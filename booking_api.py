class BookingAPI:
    BASE_URL = "https://restful-booker.herokuapp.com"

    def __init__(self, request_context):
        self.request_context = request_context

    def create_booking(self, payload):
        return self.request_context.post(f"{self.BASE_URL}/booking", data=payload)
