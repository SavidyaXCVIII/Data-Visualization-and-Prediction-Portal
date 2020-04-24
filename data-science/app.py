from flask import Flask,request, jsonify
from mongodb_connection import MongoDBConnection
from models import AL_prediction_model
app = Flask(__name__)
import pandas as pd
import numpy as np
from sklearn import linear_model
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.linear_model import LinearRegression
from sklearn.metrics import classification_report
from scipy import stats
from sklearn.preprocessing import StandardScaler
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
import statsmodels.api as sm
from sklearn import svm
from sklearn import metrics

@app.route('/add')
def hello_world():
    mongodb_connection = MongoDBConnection()
    return 'Hello World! my name is randika '


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
@app.route('/svmapi/',methods=['GET'])
def trainSVM():
    df = pd.read_csv("train.csv")
    X = df[['Pclass', 'Age', 'SibSp', 'Parch', 'Fare']].values
    X = np.nan_to_num(X)
    scaler = StandardScaler()
    X = scaler.fit_transform(X)
    Y = df["Survived"].values
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.33, random_state=42)
    clf = svm.SVC()
    clf.fit(X_train, Y_train)
    predicted=clf.predict(X_test)
    no_white_predicted = []
    for element in predicted:
        no_white_predicted.append(str(element).strip())
    results_array = {
        "accuracy" : str(metrics.accuracy_score(Y_test, predicted)),
        "f1 score macro": str(metrics.f1_score(Y_test, predicted, average='macro')),
        "f1 score micro": str(metrics.f1_score(Y_test, predicted, average='micro')),
        "precision score": str(metrics.precision_score(Y_test, predicted, average='macro')),
        "recall score": str(metrics.recall_score(Y_test, predicted, average='macro')),
        "hamming_loss": str(metrics.hamming_loss(Y_test, predicted)),
        "prediction": no_white_predicted
    }
    print(no_white_predicted)
    print("classification_report", metrics.classification_report(Y_test, predicted))
    return results_array

@app.route('/linearapi/<int:index>',methods=['GET'])
def test_linear_api(index):
    df_new = pd.read_csv("2015_to_2018_AL.csv")

    df_new

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

    y3_pred = regr2.predict(x3)
    y3_pred = np.array(y3_pred).flatten()
    mean_sq_err = mean_squared_error(y3,y3_pred)
    res_r2_score = r2_score(y3,y3_pred)
    print(mean_sq_err,res_r2_score)
    results_array = {
            "score" : str(regr2.score(x1,y1)),
            "coef ": str(regr2.coef_),
            "intercept" : str(regr2.intercept_),
            "predictions" : str(regr2.predict(x1)),
            "mse:" : str(mean_sq_err),
            "rsquared:" : str(est2.rsquared),
            "tvalues  #####": str(est2.tvalues),
            "sderrors":str(est2.bse)

        }

    return results_array

if __name__ == '__main__':
    app.run()
