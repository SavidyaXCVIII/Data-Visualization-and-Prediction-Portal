import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.preprocessing import StandardScaler
from sklearn import metrics

def trainSVM(x,y):
    df = pd.read_csv("train.csv")
    x = df[x].values
    x = np.nan_to_num(x)
    scaler = StandardScaler()
    x = scaler.fit_transform(x)
    y = df[y].values
    X_train, X_test, Y_train, Y_test = train_test_split(x, y, test_size=0.33, random_state=42)
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
    return results_array
