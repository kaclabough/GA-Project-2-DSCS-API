const mongoose = require("mongoose");

mongoose.Promise = Promise;

const mongoURI = "mongodb://localhost/digmoncs-api";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", err));

module.exports = mongoose;
