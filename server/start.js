const app = require('./server.js');
const port = 3000;

const serverInstance = app.listen(port, () => {
  console.log(`Overview is listening at http://localhost:${port}`)
});

const closeServer = () => {
  serverInstance.close();
}

exports.closeServer = closeServer;
//
