from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score



def train_random_forrest_model(X, Y):

    regressor = RandomForestRegressor(n_estimators=20, random_state=0)
    regressor.fit(X, Y)
    y_pred = regressor.predict(X)
    print(confusion_matrix(Y, y_pred))
    print(classification_report(Y, y_pred))
    print(accuracy_score(Y, y_pred))
