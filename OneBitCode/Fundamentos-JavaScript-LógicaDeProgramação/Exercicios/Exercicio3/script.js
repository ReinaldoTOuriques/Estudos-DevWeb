const measuerInput = prompt("Enter the measurement in meters that you want to convert.");
const meters = parseFloat(measuerInput);
const millimeters = meters * 10000;
const centimeters = meters * 100;
const decimeters = meters * 10;
const dekamteres = meters / 10;
const hectometer = meters / 100;
const kilometers = meters / 1000;
const selectMeasurementTypeForConversion = prompt("Select measurement type for conversion: millimeters, centimeters, decimeters, dekamteres, hectometers, kilometers");

switch (selectMeasurementTypeForConversion) {
  case "millimeters":
    alert(millimeters + " millimeters");
    break;
  case "centimeters":
    alert(centimeters + " centimeters");
    break;
  case "decimeters":
    alert(decimeters + " decimeters");
    break;
  case "dekamteres":
    alert(dekamteres + " dekamteres");
    break;
  case "hectometers":
    alert(hectometer + " hectometers");
    break;
  case "kilometers":
    alert(kilometers + " kilometers");
    break;
  default:
    alert("Invalid measurement type");
    break;
}
