const mongoose = require('mongoose').set('debug', true);
mongoose.connect('mongodb://localhost/overview', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

let captionSchema = new mongoose.Schema({
  "language": String
});

let overviewSchema = new mongoose.Schema({
  "_id": Number,
  "title": String, // this may actually be fetched from course content API instead -- TBD
  "tagline": String,
  "students": Number,
  "author": Number, // external ID
  "thumbnail": String,
  "language": String,
  "captions": [captionSchema]
});

let Overview = mongoose.model('Overview', overviewSchema);

let save = (records) => {
  records.forEach(record => {
    let entry = new Overview({
      _id: record._id,
      title: record.title,
      tagline: record.tagline,
      students: record.students,
      author: record.author,
      thumbnail: record.thumbnail,
      language: record.language,
      captions: record.captions
    });
    Promise.resolve(entry.save())
    .then(doc => console.log('Saved', doc._doc.name))
    .catch(err => console.log(err))
  })
};

let get = (_id, callback) => {
  Repo.find({_id: _id})
  .then(doc => callback(doc))
  .catch(err => console.log(err));
}



module.exports.save = save;
module.exports.get = get;