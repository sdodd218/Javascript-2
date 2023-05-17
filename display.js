export function outputToElement(elementID, value, color) {
    document.getElementById(elementID).innerHTML = value;
    if(color) {
        document.getElementById(elementID).style.color = color;
    } else {
        document.getElementById(elementID).style.color = "inherit";
    }
}