from google_cloud_functions.auth.sign_up import *
from google_cloud_storage_api.client import *
from google_cloud_storage_api.api import *
from env import *

def main():
    BUCKET = Client().getBucket("tricodecollective_opensourcehackfest");
    API = api.getInstance();
    API.setBucket(BUCKET);

if (__name__ == "__main__"):
    main();