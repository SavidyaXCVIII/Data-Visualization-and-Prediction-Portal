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

df_new = pd.read_csv("2015_to_2018_AL_func.csv")


x1 = df_new[["num_sat","fail_all","fail_all_perc","1AB","1C","Type 2","Type 3"]]
y1 = df_new[["pass_all_perc"]]

regr3 = linear_model.LinearRegression(True)
regr3.fit(x1,y1)

df_2016 = pd.read_csv("2018_AL.csv")
x3 = df_2016[["num_sat","fail_all","fail_all_perc","1AB","1C","Type 2","Type 3"]]
y3 = df_2016[["pass_all_perc"]]

print(regr3.score(x1,y1))
print(regr3.score(x3,y3))