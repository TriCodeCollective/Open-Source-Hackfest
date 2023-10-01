from helper.json import *
from google_cloud_storage_api.api import *
import functions_framework
from flask import Blueprint, request 
import flask.typing

account = Blueprint("account", __name__);

@account.route("/accountDetails", methods=["POST"])
@functions_framework.http
def account_method(req: flask.Request=None) -> flask.typing.ResponseReturnValue:
    """
    Parameters:
        req: {
            
        }
    """
    if req is None: req = request;
    json = req.get_json();
    fileName = "user/" + json["email"];
    data: str = JSONtoString(req.get_json());

    try:
        api.getInstance().createBlob(fileName, data);
    except:
        return "Error", 400;

    return "Signed up successfully.", 201;