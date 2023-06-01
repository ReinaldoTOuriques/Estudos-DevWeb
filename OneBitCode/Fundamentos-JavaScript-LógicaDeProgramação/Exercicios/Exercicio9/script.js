// Function to calculate the area of a triangle
function calculateTriangleArea() {
  let triangleBase = parseFloat(prompt("Enter the base of the triangle: "));
  let triangleHeight = parseFloat(prompt("Enter the height of the triangle: "));
  let triangleArea = triangleBase * triangleHeight / 2;
  displayResult(triangleArea); // Display the calculated area of the triangle
}

// Function to calculate the area of a rectangle
function calculateRectangleArea() {
  let rectangleBase = parseFloat(prompt("Enter the base of the rectangle: "));
  let rectangleHeight = parseFloat(prompt("Enter the height of the rectangle: "));
  let rectangleArea = rectangleBase * rectangleHeight;
  displayResult(rectangleArea); // Display the calculated area of the rectangle
}

// Function to calculate the area of a square
function calculateSquareArea() {
  let squareSide = parseFloat(prompt("Enter the side of the square: "));
  let squareArea = squareSide * squareSide;
  displayResult(squareArea); // Display the calculated area of the square
}

// Function to calculate the area of a trapezoid
function calculateTrapezoidArea() {
  let trapezoidBaseMajor = parseFloat(prompt("Enter the largest base of the trapezoid: "));
  let trapezoidBaseMinor = parseFloat(prompt("Enter the minor base of the trapezoid: "));
  let trapezoidHeight = parseFloat(prompt("Enter the height of the trapezoid: "));
  let trapezoidArea = (trapezoidBaseMajor + trapezoidBaseMinor) * trapezoidHeight / 2;
  displayResult(trapezoidArea); // Display the calculated area of the trapezoid
}

// Function to calculate the area of a circle
function calculateCircleArea() {
  let circleRadius = parseFloat(prompt("Enter the radius of the circle: "));
  let circleArea = Math.PI * circleRadius * circleRadius;
  displayResult(circleArea); // Display the calculated area of the circle
}

// Function to display the menu options and get user input
function getMenuChoice() {
  return parseInt(prompt(
    "Choose an option:\n" +
    "1 - Triangle Area\n" +
    "2 - Rectangle Area\n" +
    "3 - Square Area\n" +
    "4 - Trapezoid Area\n" +
    "5 - Circle Area\n" +
    "6 - Exit"
  ));
}

// Function to display the result
function displayResult(result) {
  alert("The result is: " + result);
}

// Function to exit the program
function exitProgram() {
  alert("Thank you for using the program!");
}

// Function to run the program
function runProgram() {
  let option;

  do {
    option = getMenuChoice(); // Get the user's option

    switch (option) {
      case 1:
        calculateTriangleArea();
        break;

      case 2:
        calculateRectangleArea();
        break;

      case 3:
        calculateSquareArea();
        break;

      case 4:
        calculateTrapezoidArea();
        break;

      case 5:
        calculateCircleArea();
        break;

      case 6:
        exitProgram();
        break;

      default:
        alert("Invalid option!"); // Display an error message for invalid options
        break;
    }

  } while (option !== 6); // Repeat until the user chooses the exit option
}

runProgram();