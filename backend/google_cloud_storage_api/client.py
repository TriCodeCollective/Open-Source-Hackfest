from google.cloud import storage
from google.auth.credentials import *

class Client:
    def __init__(self):
        self.googleClient = storage.Client(project="TriCode-OpenSourceHackfest");
        self.bucket = None;
    
    def getBucket(self, bucketName: str) -> storage.Bucket:
        self.bucket = self.googleClient.get_bucket(bucketName);
        return self.bucket;