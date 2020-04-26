import pandas
from sklearn import model_selection
from sklearn.linear_model import LogisticRegression
import joblib
import pandas as pd
import numpy as np
from sklearn import linear_model
import statsmodels.api as sm



def predict_from_given_model(model_num,X):
    filename = 'model'+str(model_num)+".sav"
    load_model = joblib.load(filename)

    prediction_result = load_model.predict(X)
    print(prediction_result)
    return prediction_result

if __name__ == "__main__":
    predict_from_given_model(1,[[2500,500,40]])