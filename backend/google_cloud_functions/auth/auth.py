from helper.json import *
from google_cloud_storage_api.api import *
import functions_framework
from flask import Blueprint, request 
import flask.typing

auth = Blueprint("auth", __name__);

@auth.route("/sign-up", methods=["POST"])
@functions_framework.http
def sign_up(req: flask.Request=None) -> flask.typing.ResponseReturnValue:
    """
    Parameters:
        req: {
            email: str,
            password: str
        }
    """
    if req is None: req = request;
    json = req.get_json();
    fileName = "auth/" + json["email"];
    data: str = JSONtoString(req.get_json());

    try:
        api.getInstance().createBlob(fileName, data);
    except:
        return "Error", 400;

    return "Signed up successfully.", 201;


@auth.route("/log-in", methods=["POST"])
@functions_framework.http
def log_in(req: flask.Request=None) -> flask.typing.ResponseReturnValue:
    """
    Parameters:
        req: {
            email: str,
            password: str
        }
    """
    if req is None: req = request;
    json = req.get_json();
    fileName = "auth/" + json["email"];
    user = None;

    try:
        user = api.getInstance().readBlob(fileName);
    except:
        return "User doesn't exist.", 400;

    userJSON = StringtoJSON(user);

    if(json["password"] != userJSON["password"]): return "Incorrect password.", 401;
    return "Logged in successfully.", 201;