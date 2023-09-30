import json

def StringtoJSON(string: str):
    return json.load(string);

def JSONtoString(jsonObj: json):
    return json.dumps(jsonObj);