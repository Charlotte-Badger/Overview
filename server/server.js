const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../public'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});

module.exports = app;

//