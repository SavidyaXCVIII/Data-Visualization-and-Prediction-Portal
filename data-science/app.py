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

import pandas as pd
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


@app.route('/select_features_predictors', methods=['GET'])
@cross_origin()
def select():
    dataset_id = request.args.get('dataset_id')


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
         print("running rf")
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
