var elForm = document.querySelector("#forms");
var elSelect = document.querySelector("#distance_number");
var elMan = document.querySelector("#man");
var elBike = document.querySelector("#bike");
var elCar = document.querySelector("#car");
var elAirplane = document.querySelector("#airplane");

var MAN_TO_DISTANCE = 3.6;
var BIKE_TO_DISTANCE = 20.1;
var CAR_TO_DISTANCE = 70;
var AIRPLANE_TO_DISTANCE = 800;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var Man = Math.floor(elSelect.value / MAN_TO_DISTANCE);
  elMan.textContent = Man;

  var Bike = Math.floor(elSelect.value / BIKE_TO_DISTANCE);
  elBike.textContent = Bike;

  var Car = Math.floor(elSelect.value / CAR_TO_DISTANCE);
  elCar.textContent = Car;

  var Airplane = Math.floor(elSelect.value / AIRPLANE_TO_DISTANCE);
  elAirplane.textContent = Airplane;
});
