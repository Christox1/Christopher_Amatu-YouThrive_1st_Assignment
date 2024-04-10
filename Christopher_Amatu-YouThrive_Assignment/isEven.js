
        // Function to check if a number is even
        function isEven(num) {
            return num % 2 === 0;
        }
        
        // Function to test isEven function
        function testIsEven() {
            // Get the input number
            const inputNumber = document.getElementById("inputNumber").value;
            
            // Check if the number is even
            const result = isEven(inputNumber);
            
            // Display the result
            if (result) {
                document.getElementById("output").innerHTML = "The number is even.";
            } else {
                document.getElementById("output").innerHTML = "The number is not even.";
            }
        }
   