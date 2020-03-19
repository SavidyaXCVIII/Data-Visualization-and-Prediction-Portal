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

if __name__ == "__main__": #testing sample models
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
    print(regr2.score(x3, y3))

    #model report
    x1_with_intercept = sm.add_constant(x1)
    est = sm.OLS(y1, x1_with_intercept)
    est2 = est.fit()
    print(est2.summary())