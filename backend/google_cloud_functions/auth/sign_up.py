from helper.json import *
from google_cloud_storage_api.api import *
import functions_framework
import flask
import flask.typing

@functions_framework.http
def sign_up(request: flask.Request) -> flask.typing.ResponseReturnValue:
    json = request.get_json();
    fileName = "user/" + json["name"];
    data: str = JSONtoString(request.get_json());
    api.getInstance().createBlob(fileName, data);
