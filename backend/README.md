# Backend
This part of the repo serves as a local test server before pushing the functions to Google Cloud Functions

# Getting Started
## Installation
### 1. VENV
Creation of the Virtual Environment (CD into ./backend first)

```
pip install virtualenv
python<version> -m venv <virtual-environment-name>
```

Activating the Virtual Environment
```
./venv/scripts/activate
```

### 2. Installing the required packages
```
pip install -r requirements.txt
```

### 3. .env
Copy the below service account key into a file and place it in ```./env/```
```
{
  "type": "service_account",
  "project_id": "tricode-opensourcehackfest",
  "private_key_id": "370b1308f3191fc38f61b64ac191c8def8106ba2",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCbHHRL2GvjpfYq\nuP2ZbhCPrVBCviQe00jQzAl5OML0UeROdcz4npBmZp5cN+MsxHFi3BpZjfCnWxmT\nPsLFK5rB6Z4CW8bOUTT73NMEOipelDFuC3yf+gUBGXPUTj1HwRORsiH+BLDtkHnZ\n+TRKfXebbSshZWr6/9uUJhISof7OBFGQBOa0XytJDQ/dacUmVm7lrmFUJ1U45+6y\ndY3hcClrfzWoJf2cBXJPvRiSDXOVdlrnyyXthRQAbjuY5PsLlReTVAzIqFmxbmT9\np64H/ckzmB8M4EDUpB8ep7CbxAfmFFfJVCCG8KWcWBkzM2AGOnIYumUQx91Zb3uk\nm3FIos5tAgMBAAECggEABwViND6vH4ZXHrbx77x+Lmq7a9H8g5KvxJe/xAdwN6vv\nSCfn58cRpTj26Ri0hUW9Fir9XFli78hdX39jRJaFMkrXVqb92D/vxIjJ2nKhkVdm\n52LIuNsR1+tlhVInTvSr5JfqFvvyYEZ+ZYH0vnxwag4meiQDlCn5r/qLLeG8TWnt\nlmBvia7wOgJO/5igyB8SsGjVtDf89sNBSQBuznjhJTVjn7FQL/LgRhp5+Hl58g7q\nsz+F7Wsga09oyDjtidyD/V3obhO1TtFmzpwqhfkcw7jNGb+UtEQ3KraS00brY/GU\nW6+d8UggZWQKEuW5re6SJWRc3w6dYUhL3mG6l8ILdwKBgQDKghKqnJcis5KD4Ke5\nCwRh/vBebJMUpF+PPdefs/6Dypnu1Y4OOTy0pPRhZbkyhjNwvTR2sGALJ1YJWuI5\n4+ynCkRD4LxkG5fa9xLd+nik3SpIkDD2O6Rttn0q6HKFNZbTlur1+7I5h5LLSx85\nsJkpsI3edGQAViQgA+1sW100LwKBgQDEFVKXuuJ9x5080W0OKATJrXBgnlbsKPze\nopgqP5fo2KP23IXozgCvbg1x1nfbyYCNNdTCkwx0NPjy442rjkKqRznUNk+DSF5R\nEZYjiHtImL4b/rf35SmupswGFILFicnoBQVPOpfllfZ/JPqDTlD6DW6QPWvk9ghV\n1JQ3+P8UIwKBgQC5CY9a28hxidmnrOA0ga+Yh2VFMjpWkzdJ4H0kzUgTTk3HYNTz\nhDNG8K7oTBWj5+Ia8pd8l/66UlAYLjYmJXB41TW5PCGH63qfNkHEGPih1ACt2ysR\n4z+EjEnkqg7yTxwo7G53I2wfixSDs3mtsgLRiCSpjnpNoGhT5KLN7tHEOwKBgQCX\nVGl4xnfUYQE+FdcXrNT9HUj0mF83Re7amBvdx1SjFMd+VvVWFd67hbEEoWPBkYMP\n+HKqdDiRWuyi7/G/bDyRFAVSfVPiWzDHWk5IQCX9gjx+eJhczlTcAMjHDH9cmxnj\nYjSVz/+45YLm35AjVIb0ZPdmhLDHdQY7z6NQi2+5hwKBgBGLKEZFpYhs9RSiPdyB\nhrA/f9bmlOqRv3qBbjGj/0Y7PUiKu0SCU8IObpVOhN2zE9GJgrjUChRkFHWwlo3j\nzL/PfTfKIZtKoAwKELV6XC0WyIvAXz09RIhsbk3sSCQYCXpp9o0uzJM3m+SleaX8\nTkaqgHFlQtueZlBPx41wjJ5q\n-----END PRIVATE KEY-----\n",
  "client_email": "read-353@tricode-opensourcehackfest.iam.gserviceaccount.com",
  "client_id": "116485732140739617411",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/read-353%40tricode-opensourcehackfest.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
```

Create a ```env``` file under ./backend
```
GOOGLE_APPLICATION_CREDENTIALS_FILE_NAME=<Service account file name>
```

# Usage
## Functions framework (Google Cloud Functions local test server)
Use the below command with the name of the function in google_cloud_functions to test the function
```
functions-framework --target <Name of the function> --debug
```

Use postman or curl to send a POST request to the server 

## Flask server
Use the command to run the Flask server
```
py main.py
```
All the routes are in ./google_cloud_functions. Example:

In ./google_cloud_functions/auth/auth.py
```
@auth.route("/sign-up", methods=["POST"])
@functions_framework.http
def sign_up(req: flask.Request=None) -> flask.typing.ResponseReturnValue:
    if req is None: req = request;
    json = req.get_json();
    fileName = "user/" + json["name"];
    data: str = JSONtoString(req.get_json());
    api.getInstance().createBlob(fileName, data);
    return "", 201;
```