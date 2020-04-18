from flask import Flask, make_response, request
from pymongo import MongoClient
import pandas as pd
import pymongo
import json
import os
app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
client = MongoClient("mongodb+srv://user_91:enigma@cluster0-zjhs0.mongodb.net/test?retryWrites=true&w=majority")
db = client.Datasets.data

def import_csvfile(filepath):
 mng_client = pymongo.MongoClient('localhost', 27017)
 mng_db = mng_client['test'] # Replace mongo db name
 collection_name = 'hi' # Replace mongo db collection name
 db_cm = mng_db[collection_name]
 cdir = os.path.dirname(__file__)
 file_res = os.path.join(cdir, filepath)
 data = pd.read_csv(file_res)
 data_json = json.loads(data.to_json(orient='records'))
 db_cm.remove()
 db_cm.insert(data_json)
if __name__ == "__main__":
 app.run()
