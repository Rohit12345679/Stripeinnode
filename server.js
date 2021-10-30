const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const  app = express();
var port = process.env.PORT || 8080;
const path=require("path")
const ejs=require("ejs")
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views',path.join(__dirname,"/resources/views"));
app.set('view engine','ejs');
const router=require("./routers/router")
app.use(router);
app.listen(port, () => {
  console.log('Server started on: ' + port);
});