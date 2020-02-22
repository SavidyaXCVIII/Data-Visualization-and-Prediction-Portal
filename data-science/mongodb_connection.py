from pymongo import MongoClient


class MongoDBConnection:

    @staticmethod
    def insert_record():
        # creating a client object with the url of the db
        client = MongoClient("mongodb+srv://user_91:enigma@cluster0-zjhs0.mongodb.net/test?retryWrites=true&w=majority")
        # getting the database object through the client
        db = client.get_database("Datasets")
        # getting the collection object

        records = db.data
        new_data = {
            'id': 2222,
            'name': 'ran'
        }

        # inserting data to the database
        records.insert_one(new_data)
