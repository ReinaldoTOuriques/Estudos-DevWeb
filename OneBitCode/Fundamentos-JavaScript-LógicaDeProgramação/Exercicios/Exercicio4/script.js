const asksTheTouristName = prompt(`What is your name?`);
const asksIfTheTouristVistitedAnyCities = prompt(`Have you visited any cities?`);

let citiesVisited = []; // This array stores the names of the visited cities.

while (asksIfTheTouristVistitedAnyCities.toLowerCase() === "yes") {
  const asksWhichCityTheTouristHaveVisited = prompt(`So what's the name of the city you visited?`);
  citiesVisited.push(asksWhichCityTheTouristHaveVisited);
  console.log(citiesVisited);
  const asksIfTheTouristVisitedAnyOtherCity = prompt(`Have you visited any other cities?`);
  if (asksIfTheTouristVisitedAnyOtherCity.toLowerCase() === "no") {
    alert(`${asksTheTouristName} visited ${citiesVisited.length} cities: ${citiesVisited.join(", ")}.`);
    break;
  }
}
