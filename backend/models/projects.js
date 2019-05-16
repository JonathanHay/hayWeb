var mongoose = require('mongoose');
var projectsSchema = mongoose.Schema(
    {
        title: String,
        body: String,
        additional: String,
        image1: String,
        image2: String,
        image3: String,
        repo: String,
    }
);
var Projects = mongoose.model('project', projectsSchema);
exports.Model = Projects;