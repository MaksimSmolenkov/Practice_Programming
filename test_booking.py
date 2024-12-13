import pytest
import jsonschema
import json
from api.booking_api import BookingAPI


def test_create_booking_success(request_context):
    booking_api = BookingAPI(request_context)
    payload = {
        "firstname": "John",
        "lastname": "Doe",
        "totalprice": 123,
        "depositpaid": True,
        "bookingdates": {
            "checkin": "2023-01-01",
            "checkout": "2023-01-10"
        },
        "additionalneeds": "Breakfast"
    }

    response = booking_api.create_booking(payload)
    assert response.status == 200

    schema = json.load(open("../schemas/booking_schema.json"))
    jsonschema.validate(response.json(), schema)
