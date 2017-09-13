{
  "name": "backend_mongodb",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "lib": "lib",
    "test": "test"
  },
  "scripts": {
      "start": "nodemon lib/server.js",
      "startapp": "node lib/expressappserver.js",
      "start-db": "mkdir -p ./db && mongod --dbpath ./db",
      "stop-db": "killall mongod",
      "test": "mocha"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.1",
    "debug": "^3.0.1",
    "express": "^4.15.4",
    "mongodb": "^2.2.31",
    "mongoose": "^4.11.11"
  },
  "devDependencies": {
    "chai": "^4.1.1",
    "mocha": "^3.5.0",
    "nodemon": "^1.11.0",
    "superagent": "^3.5.2"
}
