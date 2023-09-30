from google.cloud import storage
from google.auth.credentials import *
from .bucket import *

class Client:
    def __init__(self):
        self.client = storage.Client(project="TriCode-OpenSourceHackfest");
        self.bucket = None;
    
    async def getBucket(self, bucketName: str) -> storage.Bucket:
        self.bucket = await Bucket(self.client, bucketName);
        