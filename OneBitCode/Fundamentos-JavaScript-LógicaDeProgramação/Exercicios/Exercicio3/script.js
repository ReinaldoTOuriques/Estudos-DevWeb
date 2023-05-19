const measuerInput = prompt("enter the measurement in meters that you want to convert.");
const meters = parseFloat(measuerInput);
const millimeters = meters * 10000;
const centimeters = meters * 100;
const decimeters = meters * 10;
const dekamteres = meters / 10;
const hectometer = meters / 100;
const kilometers = meters / 1000;

switch (true) {
  case meters === millimeters:
    alert(millimeters + " millimeters");
    break;
  case meters === centimeters:
    alert(centimeters + " centimeters");
    break;
  case meters === decimeters:
    alert(decimeters + " decimeters");
    break;
  case meters === dekamteres:
    alert(dekamteres + " dekamteres");
    break;
  case meters === hectometer:
    alert(hectometer + " hectometers");
    break;
  case meters === kilometers:
    alert(kilometers + " kilometers");
    break;
  default:
    alert("invalid measurement");
    break;
}