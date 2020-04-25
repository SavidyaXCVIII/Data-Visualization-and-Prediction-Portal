import pandas as pd
import numpy as np
from sklearn import linear_model
import statsmodels.api as sm

def linear_regression_anaylsis(x,y):
    dataframe_csv = pd.read_csv("2015_to_2018_AL.csv")
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

    predictions = []
    for i in range(regr2.predict(x).shape[0]):
        predictions.append(float(regr2.predict(x)[i]))


    results_array = {
        "score": score,
        "coef": coefficients,
        "intercept":  interecept,
        "predictions": predictions,
        "rsquared": r_squared,
        "tvalues": t_values,
        "sderrors": sd_errors

    }
    return results_array