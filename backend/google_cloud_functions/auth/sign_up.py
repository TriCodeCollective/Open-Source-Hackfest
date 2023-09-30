import functions_framework
import flask
import flask.typing

@functions_framework.http
def hello_http(request: flask.Request) -> flask.typing.ResponseReturnValue:
    return "Hello World!"
