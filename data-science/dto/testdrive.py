from flask import Flask, make_response, request
from pymongo import MongoClient
import io
import csv

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
client = MongoClient("mongodb+srv://user_91:enigma@cluster0-zjhs0.mongodb.net/test?retryWrites=true&w=majority")
db = client.Datasets.data


@app.route('/')
def form():
    return


@app.route('/transform', methods=["POST"])
def transform_view():
    f = request.files['data_file']
    if not f:
        return "No file"
    mongo_docs = []
    stream = io.StringIO(f.stream.read().decode("UTF8"), newline=None)
    fstring = csv.reader(stream);
    for num, index in enumerate(fstring):
        # create a new MongoDB document dict
        doc = {}
        mongo_docs += [doc]
    result = db.insert_many(mongo_docs)
    #csv_dicts = [{k: v for k, v in row.items()} for row in csv.DictReader(fstring.splitlines(), skipinitialspace=True)]
    #mongo_docs = []
    #doc_body = {csv_dicts}
    #mongo_docs += [doc_body]
    #print("dicts are : ",csv_dicts)
    total_docs = len(result.inserted_ids)
    print("total inserted:", total_docs)
    print(fstring)



    # create list of dictionaries keyed by header row

    return "done ! imported successfully"



if __name__ == "__main__":
    app.run()
