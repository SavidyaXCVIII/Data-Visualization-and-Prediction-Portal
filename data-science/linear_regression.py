import pandas as pd
import numpy as np
from sklearn import linear_model
import statsmodels.api as sm
import joblib




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
    for i in range(1,est2.bse.shape[0]):
        sd_errors.append(float(est2.bse[i]))

    cons_sd_error =float(est2.bse[0])

    t_values = []
    for i in range(1,est2.tvalues.shape[0]):
        t_values.append(float(est2.tvalues[i]))

    cons_t_value = float(est2.tvalues[0])
    results_array = {
        "score": score,
        "coef": coefficients,
        "intercept":  interecept,
        "rsquared": r_squared,
        "tvalues": t_values,
        "sderrors": sd_errors,
        "cons_t_value": cons_t_value,
        "cons_sd_error": cons_sd_error

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