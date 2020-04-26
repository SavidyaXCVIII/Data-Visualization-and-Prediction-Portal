
from flask import Flask,request, jsonify

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

from mongodb_connection import MongoDBConnection
from models import AL_prediction_model
app = Flask(__name__)

import pandas as pd
import numpy as np
from sklearn import linear_model
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.linear_model import LinearRegression
from sklearn import metrics
import statsmodels.api as sm
from sklearn import svm
from sklearn.preprocessing import StandardScaler

CORS(app, resources={r"/*": {"origins": "*"}})


from scipy import stats
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
import statsmodels.api as sm
from pandas.io.json import json_normalize


from linear_regression import linear_regression_anaylsis,linear_model_prediction
from support_vector_machine import trainSVM,svm_model_prediction

@app.route('/')
def hello_world():

    mongodb_connection = MongoDBConnection()
    return 'Hello World! my name is randika '

    # mongodb_connection = MongoDBConnection()
    # mongodb_connection.insert_record()
    return 'Hello World!'


@app.route('/select_features_predictors', methods=['POST'])
@cross_origin()
def select():
    data = request.get_json()
    dataset_name = data['dataset_name']
    algorithm = data['algorithm']
    prediction_column = data['prediction_column']
    column_list = data['column_list']

    #test = json_normalize(data['column_list'])
    resp = jsonify(data)

    resp.status_code = 200


    if(algorithm ==  "linear"):
        res = linear_regression_anaylsis(column_list,prediction_column)
    elif(algorithm == "svm"):
        res = trainSVM(column_list,prediction_column)

    return res


@app.route('/get_prediction', methods=['POST'])
@cross_origin()
def get_prediction():
    data = request.get_json()
    if(data["algorithm"] == "svm"):
        x = data['values']
        res = svm_model_prediction(x)
    elif(data["algorithm"] == "linear"):
        x = data['values']
        res = linear_model_prediction(x)
    print(res)
    return str(res)


if __name__ == '__main__':
    app.run(debug=True)
