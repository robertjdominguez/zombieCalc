/* Elements for taking information from form and calculating
survivability in each city. */

/* TODO: (1) Figure out on-click event for userData to be called; then route the
results to a new results page.

(2) Create dynamic options for evaluating the weight of the variables.
*/

// Coefficients for each variable
let popCoefficient = true;
let densityCoefficient = true;
let elevationCoefficient = true;
let surfaceCoefficient = true;
let econCoefficient = true;

function results() {
  // Raw data for each city - to be used in production
  const cityName = document.getElementById('cityName').value;
  const cityPopDensity = document.getElementById('cityPopDensity').value;
  const cityTotalPop = document.getElementById('cityTotalPop').value;
  const cityElevation = document.getElementById('cityElevation').value;
  const citySurfaceArea = document.getElementById('citySurfaceArea').value;
  const cityEcon = document.getElementById('cityEcon').value;
  console.log('Retrieved data for ' + cityName + '.');

  // Total Pop
  if (cityTotalPop < 50000) {
    popCoefficient = 2; // TODO: Make option for these values set by user

  } else {
    popCoefficient = 1;

  };

  console.log('Total Population Coefficient: ' + popCoefficient);

  // Pop Density
  if (cityPopDensity < 1000) {
    densityCoefficient = 2;

  } else {
    densityCoefficient = 1;

  };

  console.log('Population Density Coefficient: ' + densityCoefficient);

  // Elevation
  if (cityElevation < 500) {
    elevationCoefficient = 2;

  } else {
    elevationCoefficient = 1;

  };

  console.log('Elevation Coefficient: ' + elevationCoefficient);

  // Surface Area
  if (citySurfaceArea < 1000) {
    surfaceCoefficient = 2;

  } else {
    surfaceCoefficient = 1;

  };

  console.log('Surface Area Coefficient: ' + surfaceCoefficient);

  // GDP
  if (cityEcon < 1000) {
    econCoefficient = 2;

  } else {
    econCoefficient = 1;

  };

  console.log('GDP Coefficient: ' + econCoefficient);

  // Calculate percentage chance of survival
  const survival = ((popCoefficient + elevationCoefficient + densityCoefficient +
                surfaceCoefficient + econCoefficient) / 5) / 2;

  // Output results to console for now
  console.log('Survival Raw Value: ' + survival);

  if (survival < .05) {
    document.getElementById('results').innerHTML = 'You are analyzing ' +
    cityName + '. Your chance of survival is pretty poor at ' + survival * 100 +
    '%.';

  } else {
    document.getElementById('results').innerHTML = 'You are analyzing ' +
    cityName + '. Your chance of survival is decent at ' + survival * 100 +
    '%.';
  }
}
