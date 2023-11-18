var apiKey = "2558952ed209b7b24ab70f771c61ff65";

async function loadCity() {
  const dropDown = document.getElementById("city");
  let response = await fetch("https://restcountries.com/v3.1/all");
  let data = await response.json();
  console.log(data);

  data.forEach((option) => {
    const newOption = document.createElement("option");
    // console.log(option);
    // console.log(newOption);
    newOption.value = option.name.common;
    newOption.text = option.name.common;
    dropDown.appendChild(newOption);
  });
  //loadTemperature()
}

async function loadTemperature() {
  selectElement = document.querySelector("#city");
  output = selectElement.value;

  let res1 = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${output}&appid=${apiKey}`
  );
  let data1 = await res1.json();
  console.log(data1);
  console.log(
    `${output}'s maximum temperature is ${data1.main.temp_max.toFixed()}°C`
  );
  document.getElementById(
    "weatherdisplay"
  ).innerHTML = `<b>${output}'s maximum temperature is ${data1.main.temp.toFixed()}°C<b/>`;
}
