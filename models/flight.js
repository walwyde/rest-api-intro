// exports.exampleModel =
// [{
//   title: "flight to Canada",
//   time: "1pm",
//   price: 26000,
//   date: "26-06-2022"
// }];
module.exports = class flights {
  constructor(destination, title, time, price, date) {
    this.destination = destination;
    this.title = title;
    this.time = time;
    this.price = price;
    this.date = date;
  }
};
