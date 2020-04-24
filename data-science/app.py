from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from mongodb_connection import MongoDBConnection
from models import AL_prediction_model
import pandas as pd
import numpy as np
from sklearn import linear_model
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.linear_model import LinearRegression


from scipy import stats
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
import statsmodels.api as sm

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

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
    resp = jsonify(data)
    resp.status_code = 200
    return resp


@app.route('/test',methods=['GET'])
def test_con():
    result = AL_prediction_model.run_linear_reg_test()
    result = str(result)
    return {"result" : result}

@app.route('/linear',methods=['GET'])
def test_linear():
    df_new = pd.read_csv("2015_to_2018_AL.csv")

    df_new
    x1 = df_new[["num_sat", "fail_all", "fail_all_perc"]]
    y1 = df_new[["pass_all_perc"]]

    regr2 = linear_model.LinearRegression(True)
    regr2.fit(x1, y1)
    print(regr2.score(x1, y1))

    df_2016 = pd.read_csv("2018_AL.csv")
    x3 = df_2016[["num_sat", "fail_all", "fail_all_perc"]]
    y3 = df_2016[["pass_all_perc"]]
    result = (regr2.score(x3, y3))

    # model report
    x1_with_intercept = sm.add_constant(x1)
    est = sm.OLS(y1, x1_with_intercept)
    est2 = est.fit()
    print(est2.summary())
    return str(result)

################################################################################
""" testing api with request parameters"""

csv_details = [
    {
        "dataset_id": "2",
        "features": ["num_sat", "fail_all", "fail_all_perc"],
        "predictor": ["pass_all_perc"]
    },
    {
        "dataset_id": "Batnan",
        "features": ["Tim sfgsg", "Morgan Freeman", "Bob Gunton", "William Sadler"],
        "predictor": ["Drama"]
    }
]

@app.route('/linearapi/<int:index>',methods=['GET'])
def test_linear_api(index):
    df_new = pd.read_csv("2015_to_2018_AL.csv")

    df_new

    #eatures = jsonify(csv_details[index]['features'])
    x1 = df_new[csv_details[index]['features']]
    y1 = df_new[["pass_all_perc"]]

    regr2 = linear_model.LinearRegression(True)
    regr2.fit(x1, y1)
    print(regr2.score(x1, y1))

    df_2016 = pd.read_csv("2018_AL.csv")
    x3 = df_2016[["num_sat", "fail_all", "fail_all_perc"]]
    y3 = df_2016[["pass_all_perc"]]
    result = (regr2.score(x3, y3))

    # model report
    x1_with_intercept = sm.add_constant(x1)
    est = sm.OLS(y1, x1_with_intercept)
    est2 = est.fit()
    print(est2.summary())
    return str(result)

if __name__ == '__main__':
    app.run(debug=True)
