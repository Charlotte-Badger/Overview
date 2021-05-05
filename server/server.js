const express = require('express');
const app = express();
const path = require('path');
const db = require('../database/overview.js');
const $ = require('jquery');


app.use(express.static(__dirname + '/../public'));

const port = 3000;

app.get('/overview?:courseId', function(req, res) {
  let courseId = req.query.courseId;
  console.log('parameters', req.query);
  db.get(courseId, function(rec) {
    console.log(rec);
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
  });
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
