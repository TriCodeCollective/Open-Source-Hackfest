from helper.json import *
from google_cloud_storage_api.api import *
import functions_framework
from flask import Blueprint, request 
import flask.typing

auth = Blueprint("auth", __name__);

@auth.route("/sign-up", methods=["POST"])
@functions_framework.http
def sign_up(req: flask.Request=None) -> flask.typing.ResponseReturnValue:
    if req is None: req = request;
    json = req.get_json();
    fileName = "user/" + json["name"];
    data: str = JSONtoString(req.get_json());
    api.getInstance().createBlob(fileName, data);
    return "", 201;
