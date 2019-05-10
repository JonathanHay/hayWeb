var express = require('express');
var router = express.Router();
var NewsItems = require('../models/newsitems');

router.route('/')
    .post(function (request, response) {
        var newsitem = new NewsItems.Model(request.body.newsitem);
        newsitem.save(function (error) {
            if (error) response.send(error);
            response.json({ newsitem: newsitem });
        });
    })
    .get(function (request, response) {
        NewsItems.Model.find(function (error, newsitems) {
            if (error) response.send(error);
            response.json({ newsitem: newsitems });
        });
    });
router.route('/:item_id')
    .get(function (request, response) {
        NewsItems.Model.findById(request.params.item_id, function (error, newsitem) {
            if (error) {
                response.send({ error: error });
            }
            else {
                response.json({ newsitem: newsitem });
            }
        });
    })
    .put(function (request, response) {
        NewsItems.Model.findById(request.params.item_id, function (error, newsitem) {
            if (error) {
                response.send({ error: error });
            }
            else {
                newsitem.title = request.body.newsitem.title;
                newsitem.body = request.body.newsitem.body;
                newsitem.additional = request.body.newsitem.additional;
                newsitem.image = request.body.newsitem.image;
                newsitem.save(function (error) {
                    if (error) {
                        response.send({ error: error });
                    }
                    else {
                        response.json({ newsitem: newsitem });
                    }
                });
            }
        });
    })
    .delete(function (request, response) {
        NewsItems.Model.findOneAndDelete({ _id: request.params.item_id }, function (error, deleted) {
            if (!error) {
                response.json({ newsitem: deleted });
            }
        });
    });
module.exports = router;