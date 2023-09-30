from dotenv import load_dotenv
import os

load_dotenv();

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.getcwd() + "\\env\\" + os.environ["GOOGLE_APPLICATION_CREDENTIALS_FILE_NAME"];