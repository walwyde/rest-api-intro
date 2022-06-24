const flights = require("../models/flight");
const fs = require("fs");
const renderFlights = require("../data/flights.json");
const path = require("path");

root = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "flights.json"
);

//get all flights
exports.example = (req, res) => {
  console.log("example");
  return res.json({ renderFlights });
};

exports.postexample = (req, res) => {
  console.log(req.body);
  let destination = req.body.destination;
  let title = req.body.title;
  let time = req.body.time;
  let date = req.body.date;
  let price = req.body.price;
  let newFlight = new flights(destination, title, time, price, date);
  console.log(newFlight);

  fs.readFile(root, (err, fileContent) => {
    let flightsArray = [];

    if (!err) {
      flightsArray = JSON.parse(fileContent);
    }
    flightsArray.push(newFlight);
    fs.writeFile(root, JSON.stringify(flightsArray), (err) => {
      if (err) {
        return res.json({ message: "an error occured" });
      }
      return res.json({ message: "flight added" });
    });
  });
};

// get single flight
exports.getFlight = (req, res) => {
  let destination = req.params.destination;
  console.log(destination);
  fs.readFile(root, (err, fileContent) => {
    let flightArray = [];

    if (!err) {
      flightArray = JSON.parse(fileContent);
      let updatedFlightArray = [...flightArray];

      const theFlight = updatedFlightArray.find(
        (flight) => flight.destination === destination
      );
      if (!theFlight) {
        return res.json({ message: "flight not found" });
      }
      return res.json({ theFlight });
    }
  });
};
