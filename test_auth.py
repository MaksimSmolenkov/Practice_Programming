import jsonschema
import json
from api.auth_api import AuthAPI


def test_get_token_success(request_context):
    auth_api = AuthAPI(request_context)
    credentials = {
        "username": "admin",
        "password": "password123"
    }

    response = auth_api.get_token(credentials)
    assert response.status == 200

    schema = json.load(open("../schemas/auth_schema.json"))
    jsonschema.validate(response.json(), schema)
