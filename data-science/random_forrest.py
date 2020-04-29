from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
import pandas as pd
import numpy as np
import joblib

def train_random_forrest_model(X, Y,dataset_id):
    df = pd.read_csv("dataset"+str(dataset_id)+".csv")
    rf = RandomForestClassifier(n_estimators=100, random_state=0)
    X = df[X].values
    X = np.nan_to_num(X)
    Y = df[Y].values
    rf.fit(X, Y)
    y_pred = rf.predict(X)
    print(confusion_matrix(Y, y_pred))
    print(accuracy_score(Y, y_pred))
    results_array = {
        "score": accuracy_score(Y, y_pred),

    }
    return results_array

def rf_model_prediction(x):
    filename = "model.sav"
    load_model = joblib.load(filename)
    result = load_model.predict(x)
    print(result)
    return result