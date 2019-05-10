var mongoose = require('mongoose');
var newsItemsSchema = mongoose.Schema(
    {
        title: String,
        body: String,
        additional: String,
        Image: String
    }
);
var NewsItems = mongoose.model('newsitem', newsItemsSchema);
exports.Model = NewsItems;