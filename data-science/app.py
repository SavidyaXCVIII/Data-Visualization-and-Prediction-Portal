from flask import Flask
from mongodb_connection import MongoDBConnection

app = Flask(__name__)


@app.route('/add')
def hello_world():
    mongodb_connection = MongoDBConnection()
    mongodb_connection.insert_record()
    return 'Hello World! my name is randika '


if __name__ == '__main__':
    app.run()
