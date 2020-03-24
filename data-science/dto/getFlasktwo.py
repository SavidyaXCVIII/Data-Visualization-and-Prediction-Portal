from flask import Flask, make_response, request
from pymongo import MongoClient

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
client = MongoClient("mongodb+srv://user_91:enigma@cluster0-zjhs0.mongodb.net/test?retryWrites=true&w=majority")
db = client.Datasets.data

@app.route('/')
def form():
    return """
        <html>
            <body>
                <h1>Get csv file from the database</h1>

                <form method= "GET" action "/get">
                    <input type="text" name="ID" >
                    <input type="submit" >
                </form>
            </body>
        </html>
    """

if __name__ == "__main__":
    app.run()
