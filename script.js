let celsiusInput = document.querySelector(".celsiusInput");
let fahrenheitInput = document.querySelector(".fahrenheitInput");
let kelvinInput = document.querySelector(".kelvinInput");

const kelvinConstant = 273.15;
const sunEl = document.querySelector(".sun");
const snowEl = document.querySelector(".snow");
const rainEl = document.querySelector(".rain");

function round(value) {
  return Math.round(value * 100) / 100; // 2 decimal places
}

function compute(e) {
  let currentValue = parseFloat(e.target.value);

  if (isNaN(currentValue)) return;

  switch (e.target.name) {
    case "celsius":
      fahrenheitInput.value = round((currentValue * 9/5) + 32);
      kelvinInput.value = round(currentValue + kelvinConstant);
      break;

    case "fahrenheit":
      celsiusInput.value = round((currentValue - 32) * 5/9);
      kelvinInput.value = round((currentValue - 32) * 5/9 + kelvinConstant);
      break;

    case "kelvin":
      celsiusInput.value = round(currentValue - kelvinConstant);
      fahrenheitInput.value = round((currentValue - kelvinConstant) * 9/5 + 32);
      break;
  }

  if (celsiusInput.value <= 3) {
    snowEl.style.display = "block";
    rainEl.style.display = "none";
    sunEl.style.display = "none";
  } else if (celsiusInput.value > 3 && celsiusInput.value < 13) {
    rainEl.style.display = "block";
    snowEl.style.display = "none";
    sunEl.style.display = "none";
  } else {
    sunEl.style.display = "block";
    snowEl.style.display = "none";
    rainEl.style.display = "none";
  }
}
