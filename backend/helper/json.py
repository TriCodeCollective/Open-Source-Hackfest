import json

def StringtoJSON(string: str):
    return json.loads(string);

def JSONtoString(jsonObj: json):
    return json.dumps(jsonObj);