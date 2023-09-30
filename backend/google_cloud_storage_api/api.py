from google.cloud import storage 
from google_cloud_storage_api.client import *

class api:
    INSTANCE = None

    def __init__(self):
        self.bucket = None;
    
    @staticmethod
    def getInstance():
        if api.INSTANCE is None:
            bucket = Client().getBucket("tricodecollective_opensourcehackfest");
            api.INSTANCE = api();
            api.INSTANCE.setBucket(bucket);
        return api.INSTANCE;

    def setBucket(self, bucket: storage.Bucket):
        self.bucket = bucket;

    def createBlob(self, filename, data):
        blob = self.bucket.blob(filename);
        blob.upload_from_string(data, content_type="json");

    def readBlob(self, filename):
        return self.bucket.blob(filename).download_as_text();