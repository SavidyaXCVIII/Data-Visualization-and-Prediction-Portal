from flask import Flask, request, jsonify
from mongodb_connection import MongoDBConnection

app = Flask(__name__)


@app.route('/')
def hello_world():
    # mongodb_connection = MongoDBConnection()
    # mongodb_connection.insert_record()
    return 'Hello World! my name is randikaaa '


@app.route('/select_features_predictors', methods=['POST'])
def select():
    data = request.get_json()
    dataset_name = data['dataset_name']
    algorithm = data['algorithm']
    prediction_column = data['prediction_column']
    column_list = data['column_list']
    return jsonify({'result': 'success', 'dataset_name': dataset_name})


if __name__ == '__main__':
    app.run(debug=True)
