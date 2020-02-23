const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for DatasetInfo
let Dataset = new Schema({
    dataset_name: {
        type: String
    },
    publisher_name: {
        type: String
    },
    year: {
        type: Number
    },
    release_date: {
        type: Number
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
},{
    collection: 'dataset'
});

module.exports = mongoose.model('Dataset', Dataset);
