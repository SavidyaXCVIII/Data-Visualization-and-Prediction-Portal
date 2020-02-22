import pandas as pd
import numpy as np
from sklearn import svm
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler



#reading the datasets
data_set = "get_data_set_from_db"

df = pd.readcsv()

def trainModel(clf, X, Y):
    """clf --> type of classifier algorithm X --> X matrix data selection
        Y --> prediction matrix
    """
    X = np.nan_to_num(X) # replaces nan values with zero of dataset matrix
    X_train, X_test, Y_tain, Y_test = train_test_split(X,Y,0.33,42)
    p=clf.predict(X_test)
    return classification_report(Y_test, p)




