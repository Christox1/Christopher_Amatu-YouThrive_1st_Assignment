function calculateArea() {
    // Get the values of length and width from the input fields
    const lengthInput = document.getElementById("length");
    const widthInput = document.getElementById("width");
    
    // Convert the input values to numbers
    const length = parseFloat(lengthInput.value);
    const area = length * width;
  
    document.getElementById("result").innerHTML = "The area of the rectangle is: " + area;
}