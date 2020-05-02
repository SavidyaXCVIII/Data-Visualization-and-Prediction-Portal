import pandas as pd
import numpy as np
from sklearn import linear_model
import statsmodels.api as sm
import joblib

#score : a measure of accuracy which indicates how close the trained model predicts when data is given.
#intercept : is the value when the x matrix of featurs is zero
#coefficients : these values indicates how much the predictor value will change per unit increase
#standard erros : represents the average distance that the observed values fall from the regression line. Conveniently, it tells you how wrong the regression model is on average using the units of the response variable.
#r squared : R-squared is a statistical measure of how close the data are to the fitted regression line.
#t values : is a statistical measure of the variance of the given cases


def linear_regression_anaylsis(x,y,dataset_id):
    dataframe_csv = pd.read_csv("../frontend/src/assets/"+str(dataset_id)+".csv")
    print(x)
    x = dataframe_csv[x]
    y = dataframe_csv[y]

    regr2 = linear_model.LinearRegression(True)
    regr2.fit(x, y)
    print(regr2.score(x, y))

    # model report
    x1_with_intercept = sm.add_constant(x)
    est = sm.OLS(y, x1_with_intercept)
    est2 = est.fit()


    score = regr2.score(x,y)

    interecept = regr2.intercept_[0]

    coefficients = []
    for i in range(x.shape[1]):
          coefficients.append(float(regr2.coef_[0][i]))

    r_squared = est2.rsquared

    sd_errors = []
    for i in range(est2.bse.shape[0]):
        sd_errors.append(float(est2.bse[i]))


    t_values = []
    for i in range(est2.tvalues.shape[0]):
        t_values.append(float(est2.tvalues[i]))


    results_array = {
        "score": score,
        "coef": coefficients,
        "intercept":  interecept,
        "rsquared": r_squared,
        "tvalues": t_values,
        "sderrors": sd_errors

    }
    filename = 'model.sav'
    joblib.dump(regr2, filename)
    return results_array

def linear_model_prediction(x):
    filename = "model.sav"
    load_model = joblib.load(filename)
    result = load_model.predict(x)
    print(result)
    return result