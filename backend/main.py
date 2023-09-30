from google_cloud_functions.auth.sign_up import *
from google_cloud_storage_api.client import *
from google_cloud_storage_api.bucket import *
import logging
import asyncio

async def test() :
    BUCKET = await Client().getBucket("tricodecollective_opensourcehackfest");
    logging.debug(BUCKET)

if __name__ == "__main__":
    asyncio.run(test());