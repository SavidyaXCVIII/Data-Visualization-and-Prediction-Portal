from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from mongodb_connection import MongoDBConnection

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/')
def hello_world():
    # mongodb_connection = MongoDBConnection()
    # mongodb_connection.insert_record()
    return 'Hello World!'


@app.route('/select_features_predictors', methods=['POST'])
@cross_origin()
def select():
    data = request.get_json()
    dataset_name = data['dataset_name']
    algorithm = data['algorithm']
    prediction_column = data['prediction_column']
    column_list = data['column_list']
    resp = jsonify(data)
    resp.status_code = 200
    return resp


if __name__ == '__main__':
    app.run(debug=True)
