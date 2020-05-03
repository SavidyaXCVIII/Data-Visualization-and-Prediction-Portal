from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
import pandas as pd
import numpy as np
from sklearn import metrics
import joblib

def train_random_forrest_model(X, Y,dataset_id):
    df = pd.read_csv("../frontend/src/assets/"+str(dataset_id)+".csv")
    rf = RandomForestClassifier(n_estimators=100, random_state=0)
    X = df[X].values
    X = np.nan_to_num(X)
    Y = df[Y].values
    rf.fit(X, Y)
    y_pred = rf.predict(X)
    print(confusion_matrix(Y, y_pred))
    print(accuracy_score(Y, y_pred))
    results_array = {
        "accuracy" : str(metrics.accuracy_score(Y, y_pred)),
        "f1_score_macro": str(metrics.f1_score(Y, y_pred, average='macro')),
        "f1_score_micro": str(metrics.f1_score(Y, y_pred, average='micro')),
        "precision_score": str(metrics.precision_score(Y, y_pred, average='macro')),
        "recall_score": str(metrics.recall_score(Y, y_pred, average='macro')),
    }
    return results_array

def rf_model_prediction(x):
    filename = "model.sav"
    load_model = joblib.load(filename)
    result = load_model.predict(x)
    print(result)
    return result