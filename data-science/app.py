import csv
import urllib
import urllib.parse
import pandas

from flask import Flask,request, jsonify

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import ast

#from partd import pandas

from mongodb_connection import MongoDBConnection
app = Flask(__name__)

#import pandas as pd
import numpy as np
from sklearn import linear_model
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.linear_model import LinearRegression
from sklearn import metrics
import statsmodels.api as sm
from sklearn import svm
from sklearn.preprocessing import StandardScaler

from flask import Flask, request, url_for

CORS(app, resources={r"/*": {"origins": "*"}})


from scipy import stats
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
# from sklearn.compose import ColumnTransformer
import statsmodels.api as sm
from pandas.io.json import json_normalize


from linear_regression import linear_regression_anaylsis,linear_model_prediction
from support_vector_machine import trainSVM,svm_model_prediction
from random_forrest import train_random_forrest_model,rf_model_prediction
@app.route('/')
def hello_world():

    mongodb_connection = MongoDBConnection()
    return 'Hello World! my name is randika '

    # mongodb_connection = MongoDBConnection()
    # mongodb_connection.insert_record()
    return 'Hello World!'

@app.route('/isuru')
def testcsv():
    mongodb_connection = MongoDBConnection()

    cursor = mongodb_connection.testData.find({})

    return 'Hello World! my name is Isuru! '

    # mongodb_connection = MongoDBConnection()
    # mongodb_connection.insert_record()
    return 'Hello World!'

@app.route('/writefile/<dbName>')
def writeFile(dbName) :
    print(dbName)

    client = pymongo.MongoClient("mongodb+srv://user_91:sdgp@cluster0-zjhs0.mongodb.net/test?retryWrites=true&w=majority")
    db = client.test

    print("executing writeFile >>>")

    dbname = dbName
    cursor = db[dbname].find()

    # extract the list of documents from cursor obj
    mongo_docs = list(cursor)

    # restrict the number of docs to export
    mongo_docs = mongo_docs[:200]  # read first 200 lines
    print("total data:", len(mongo_docs))

    # create an empty DataFrame for storing documents
    docs = pandas.DataFrame(columns=[]) #create DataFrame named docs

    # iterate over the list of MongoDB dict documents
    for num, doc in enumerate(mongo_docs):
        doc["_id"] = str(doc["_id"])

        doc_id = doc["_id"]

        series_obj = pandas.Series(doc, name=doc_id)

        docs = docs.append(series_obj) #insert data

    file_name = dbname + "_file.csv"
    docs.to_csv(file_name, ",")  # CSV delimited by commas

    df = pandas.read_csv(file_name) #read csv file
    first_column = df.columns[0]
    df = df.drop([first_column], axis=1) #remove first column of csv file(unwanted column)
    df.to_csv(file_name, index=False) #write updated file again to csv

    # export MongoDB documents to CSV
    # csv_export = docs.to_csv(sep=",")  # CSV delimited by commas
    # print("\nCSV data:", csv_export) #print csv file in run

    return 'Done!'

@app.route('/select_features_predictors', methods=['GET'])
@cross_origin()
def select():
    dataset_id = request.args.get('dataset_id')


    dataset_name = request.args.get('dataset_name')
    algorithm = request.args.get('algorithm')
    prediction_column = request.args.get("prediction_column")
    column_list = request.args.get("column_list")

    new_column_list = column_list.split(",")
    new_prediction_column = prediction_column.split(",")
    print(new_column_list,new_prediction_column)
    if(algorithm ==  "linear"):
         res = linear_regression_anaylsis(new_column_list,new_prediction_column,dataset_id)
    elif(algorithm == "svm"):
         res = trainSVM(new_column_list,new_prediction_column,dataset_id)
    elif(algorithm == "rf"):
         res = train_random_forrest_model(new_column_list, new_prediction_column,dataset_id)
    res = jsonify(res)
    res.status_code = 200
    return res


@app.route('/get_prediction', methods=['GET'])
@cross_origin()
def get_prediction():
    algorithm = request.args.get('algorithm')
    values = request.args.get("values").split(",")
    if(algorithm == "svm"):
        x = [values]
        x = np.asfarray(x, float)
        res = svm_model_prediction(x)
    elif(algorithm == "linear"):
        x = [values]
        x = np.asfarray(x, float)
        res = linear_model_prediction(x)
    elif(algorithm == "rf"):
        x = [values]
        x = np.asfarray(x, float)
        res = rf_model_prediction(x)
    string_result = str(res[0]).strip("[").strip("]")
    return string_result


if __name__ == '__main__':
    app.run(debug=True)
