from google_cloud_functions.auth.auth import *
from google_cloud_storage_api.client import *
from google_cloud_storage_api.api import *
from flask import Flask
from flask_cors import CORS
from env import *

app = Flask(__name__);
CORS(app)
app.register_blueprint(auth)

def main():
    app.run();

    BUCKET = Client().getBucket("tricodecollective_opensourcehackfest");
    API = api.getInstance();
    API.setBucket(BUCKET);


if (__name__ == "__main__"):
    main();