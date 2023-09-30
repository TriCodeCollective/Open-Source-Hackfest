from google.cloud import storage
from google.cloud import client

class Bucket:
    def __init__(self, client: client.Client, bucketName: str):
        self.client = client;
        self.bucketObj = self.client.bucket(bucketName);
        self.bucket = self.initBucket();
        
    async def initBucket(self) -> storage.Bucket:
        return await self.client.getBucket(self.bucketObj)
