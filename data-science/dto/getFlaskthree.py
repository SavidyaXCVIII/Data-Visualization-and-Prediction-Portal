import os
import json
import pymongo
from flask import Flask
from flask import request
from pymongo import MongoClient

app = Flask(__name__)

client = pymongo.MongoClient("mongodb+srv://user_91:enigma@cluster0-zjhs0.mongodb.net/test?retryWrites=true&w=majority")
db = client.test
collection = db.test1


# @app.route("/", methods=['POST'])
# def insert_document():
#     req_data = request.get_json()
#     collection.insert_one(req_data).inserted_id
#     return ('', 204)

@app.route('/')
def get():
    documents = collection.find()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response)


if __name__ == '__main__':
    app.run()
