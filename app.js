import {calculateCircumference, calculateArea, calculateSphereVolume} from './circleCalculator.js';
import {convertToNumber} from './validation.js';
import {outputToElement} from './display.js';

// can't use onclick on the button because modules create their own scope
document.querySelector('#submitButton').addEventListener("click", function() {
    submitFunction('circumference');
}, false);
document.querySelector('#submitButtonArea').addEventListener("click", function() {
    submitFunction('area');
}, false);
document.querySelector('#submitButtonVolume').addEventListener("click", function() {
    submitFunction('volume');
}, false);

function submitFunction(calculationToMake) {
    let outputId = "output", inputId = "radius";
    if (calculationToMake === "area") {
        outputId += "Area";
        inputId += "Area";
    } else if (calculationToMake === "volume") {
        outputId += "Volume";
        inputId += "Volume";
    }
    let userRadius = convertToNumber(document.getElementById(inputId).value);
    if(!userRadius) {
        outputToElement(outputId, "Please enter a valid number.", "red");
    } else {
        if (calculationToMake === "area") {
            outputToElement(outputId, `The area is ${calculateArea(userRadius)}!`);
        }else if (calculationToMake === "volume") {
            outputToElement(outputId, `The area is ${calculateSphereVolume(userRadius)}!`);
        } else {
            outputToElement(outputId, `The circumference is ${calculateCircumference(userRadius)}!`);
        }
    }
}

