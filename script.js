document.addEventListener("DOMContentLoaded", function () {
    const chocolateForm = document.getElementById("chocolate-form");
    const customPack = document.getElementById("custom-pack");
    const totalPrice = document.getElementById("total-price");

    // Add more chocolate options as needed, and update their IDs accordingly
    const chocolateInputs = [
        document.getElementById("chocolate1"),
        document.getElementById("chocolate2"),
        document.getElementById("chocolate3"),
        document.getElementById("chocolate4"),
        document.getElementById("chocolate5"),
        document.getElementById("chocolate6"),
        
    ];

    // Calculate the total price when the "Calculate Total" button is clicked
    const calculateButton = document.getElementById("calculate-button");
    calculateButton.addEventListener("click", calculateTotal);

    function calculateTotal() {
        let total = 0;
        customPack.innerHTML = "";

        let totalChocolates = 0; // Track the total selected chocolates

        chocolateInputs.forEach((input, index) => {
            const quantity = parseInt(input.value);

            if (quantity > 0) {
                totalChocolates += quantity;

                if (totalChocolates > 8) {
                    alert("You can select a maximum of 8 chocolates.");
                    return; // Exit the loop if the limit is exceeded
                }

                const chocolateName = `Chocolate ${index + 1}`;
                const selectedChocolate = document.createElement("li");
                selectedChocolate.textContent = `${chocolateName} x${quantity}`;
                customPack.appendChild(selectedChocolate);

                // Replace these prices with the actual prices of your chocolates
                const chocolatePrice = index === 0 ? 2.00 : 3.50;
                total += chocolatePrice * quantity;
            }
        });

        totalPrice.textContent = total.toFixed(2);
    }
});
