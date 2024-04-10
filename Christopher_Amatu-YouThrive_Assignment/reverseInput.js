
// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

function testReverse() {
    const inputString = document.getElementById("inputString").value;
    
    const reversedString = reverseString(inputString);
    
    document.getElementById("output").innerHTML = "Reversed string: " + reversedString;
}
