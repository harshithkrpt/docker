const mongoose = require("mongoose");

const DATABASE = "mongodb://mymongo:27017/hitesh";

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database Connected!!!!!!!!!!\n\n\n-------------\n\n");
  })
  .catch(err => {
    console.log("Connection Error");
  });
