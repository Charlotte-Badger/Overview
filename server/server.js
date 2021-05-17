const db = require('../database/overview.js');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../public'));

const port = 3000;

app.get('/overview?:courseId', function(req, res) {
  let courseId = req.query.courseId;
  db.get(courseId, function(rec) {
    console.log(rec);
    if (rec[0] === undefined) {
      res.status(404).send([]);
    } else {
      res.send({
        "courseId": rec[0].courseId,
        "title": rec[0].title,
        "tagline": rec[0].tagline,
        "students": rec[0].students,
        "subjects": rec[0].subjects,
        "author": rec[0].author,
        "language": rec[0].language,
        "captions": rec[0].captions
      });
    }
  });
});

module.exports = app;
