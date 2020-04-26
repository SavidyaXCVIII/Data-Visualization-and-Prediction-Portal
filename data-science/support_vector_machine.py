import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.preprocessing import StandardScaler
from sklearn import metrics
import joblib

def trainSVM(x,y):
    df = pd.read_csv("train.csv")
    x = df[x].values
    x = np.nan_to_num(x)
    scaler = StandardScaler()
    x = scaler.fit_transform(x)
    y = df[y].values
    clf = svm.SVC()
    clf.fit(x, y)
    predicted=clf.predict(x)
    no_white_predicted = []
    for element in predicted:
        no_white_predicted.append(str(element).strip())
    results_array = {
        "accuracy" : str(metrics.accuracy_score(y, predicted)),
        "f1 score macro": str(metrics.f1_score(y, predicted, average='macro')),
        "f1 score micro": str(metrics.f1_score(y, predicted, average='micro')),
        "precision score": str(metrics.precision_score(y, predicted, average='macro')),
        "recall score": str(metrics.recall_score(y, predicted, average='macro')),
        "hamming_loss": str(metrics.hamming_loss(y, predicted)),
        "prediction": no_white_predicted
    }
    filename = 'model.sav'
    joblib.dump(clf, filename)
    return results_array


def svm_model_prediction(x):
    filename = "model.sav"
    load_model = joblib.load(filename)
    result = load_model.predict(x)
    print(result)
    return result