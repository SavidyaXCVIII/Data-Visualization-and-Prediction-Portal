const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user_91:enigma@cluster0-zjhs0.mongodb.net/test?retryWrites=true&w=majority";


MongoClient.connect(uri, function (err, db) {
    if (err) throw err;
    console.log("Database created!");

    var dbo = db.db("hello");
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log('collection created');
        db.close();
    });
});
