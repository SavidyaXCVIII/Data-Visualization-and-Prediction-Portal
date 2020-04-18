from flask import Flask, make_response, request ,url_for
from pymongo import MongoClient
import os
import json
import pymongo
from flask import Flask
from flask import request

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
client = MongoClient("mongodb+srv://user_91:enigma@cluster0-zjhs0.mongodb.net/test?retryWrites=true&w=majority")
db = client.Datasets.data
collection = db['hi']

# @app.route('/')
# def form():
#     return """
#         <html>
#             <body>
#                 <h1>Get csv file from the database</h1>
#
#                 <form method= "GET" action "/get">
#                     <input type="text" name="ID" >
#                     <input type="submit" >
#                 </form>
#             </body>
#         </html>
#     """

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
