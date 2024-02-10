let celsiusInput = document.querySelector(".celsiusInput");
let fahreneitInput = document.querySelector(".fahrenheitInput");
let kelvinInput = document.querySelector(".kelvinInput");
const kelvinConstant = 273.15;
const sunEl = document.querySelector(".sun");
const snowEl = document.querySelector(".snow");
const rainEl = document.querySelector(".rain");


function compute(e){
    let currentValue = +e.target.value;

    switch (e.target.name) {
        case "celsius":
            fahreneitInput.value = Math.floor((currentValue * 9/5) + 32);
            kelvinInput.value = Math.floor(currentValue + kelvinConstant);
            break;
        case "fahrenheit":
            celsiusInput.value = Math.floor((currentValue -32) * 5/9);
            kelvinInput.value = Math.floor((currentValue -32) * 5/9 + kelvinConstant);
            break;
        case "kelvin":
            celsiusInput.value = Math.floor(currentValue - kelvinConstant);
            fahreneitInput.value = Math.floor((currentValue - kelvinConstant) * 5/9 + 32);
            break;
        default:
            break;
    }
    if(celsiusInput.value <=3){
        rainEl.style.display = "none"
        sunEl.style.display = "none";
        snowEl.style.display = "block";
    }else if(celsiusInput.value >3 && celsiusInput.value <13){
        rainEl.style.display = "block"
        sunEl.style.display = "none";
        snowEl.style.display = "none";
    }else if(celsiusInput.value >=13){
        rainEl.style.display = "none"
        sunEl.style.display = "block";
        snowEl.style.display = "none";
    }
}