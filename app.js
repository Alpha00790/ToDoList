//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


app.get("/", function(req, res) {
  // res.send("Hello");

  let today = new Date();

  let options = {
    weekday: "long",
    day : "numeric",
    month : "long",
  };

  let day = today.toLocaleDateString("en-US",options);


  // var currentDay = today.getDay();
  // var day = "";

  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //
  //     break;
  //   case 1:
  //     day = "Monday";
  //
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //
  //     break;
  //   case 4:
  //     day = "Thursday";
  //
  //     break;
  //   case 5:
  //     day = "Friday";
  //
  //     break;
  //   case 6:
  //     day = "Saturday";
  //
  //     break;
  //
  //   default:
  //     console.log("Error:Current day is equal to: " + currentDay);
  //
  // }
  res.render("list", {
    listTitle: day, newListItems:items
  });

});

app.post("/",function(req,res){
  let item = req.body.newItem;

  // console.log(item);
  // res.render("list",{newListItem:item});

  items.push(item);

  res.redirect("/");
});

app.listen(8080, function() {
  console.log("Server started on port 8080");
});
