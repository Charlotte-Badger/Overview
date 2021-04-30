const faker = require('faker');
const db = require('./overview.js');

const capitalize = function (string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};


const lang = [
  "Mandarin, Spanish, Hindustani, Bengali, Portuguese, Russian, Japanese, French, German, Tamil, Javanese, Italian, Romanian, Greek, Hipster"
];

const create = function() {
  const data = [];
  for (let i = 1; i <= 100; i++) {
    console.log('index', i);
    let captions = [{language: "English"}];
    for (let j = 1; j <= 5; j++) {
      let rand = Math.random() * lang.length;
      captions.push({language: lang[rand]});
    }
    data.push({
      "_id": i,
      "title": faker.company.catchPhrase(), // this may actually be fetched from course content API instead -- TBD
      "tagline": capitalize(faker.hacker.ingverb()) + ' the ' + faker.hacker.adjective() + ' ' + faker.hacker.noun(),
      "students": Math.floor((Math.random() * 90000)) + 10000,
      "author": Math.floor((Math.random() * 99)) + 1, // external ID
      "thumbnail": faker.image.abstract(),
      "language": "English",
      "captions": [captions]
    });
  }
  db.save(data);
}

create();

module.exports = create;
