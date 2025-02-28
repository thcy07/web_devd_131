let numParticipants = 1;

document.getElementById("add").addEventListener("click", function () {
    numParticipants++;

    // Find the first participant section to clone
    let original = document.querySelector(".participant1");
    let clone = original.cloneNode(true);

    // Update the text content (e.g., "Participant 2", "Participant 3", etc.)
    clone.querySelector("p").textContent = "Participant " + numParticipants;

    // Update input IDs and names
    clone.querySelectorAll("input, select").forEach((input) => {
        let oldId = input.id;
        if (oldId) {
            input.id = oldId + numParticipants;
        }
        if (input.name) {
            input.name = input.name + numParticipants;
        }
        input.value = ""; // Clear any existing values
    });

    // Insert the new participant section before the add button
    let addButton = document.getElementById("add");
    addButton.parentNode.insertBefore(clone, addButton);
});

// Handle form submission
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Find all fee inputs and sum them up
    let totalFee = 0;
    document.querySelectorAll('input[name^="fee"]').forEach((feeInput) => {
        totalFee += Number(feeInput.value) || 0; // Convert to number and add
    });

    // Get the adult's name
    let adultName = document.getElementById("adult_name").value || "Guest";

    // Hide the form
    document.querySelector("form").style.display = "none";

    // Show the summary message
    let summary = document.getElementById("summary");
    summary.style.display = "block";
    summary.innerHTML = `Thank you <strong>${adultName}</strong> for registering. You have registered <strong>${numParticipants}</strong> participant(s) and owe <strong>$${totalFee}</strong> in Fees.`;
});
