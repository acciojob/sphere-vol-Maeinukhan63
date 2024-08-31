// script.js

function volume_sphere(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the radius value from the input field
    const radiusInput = document.getElementById('radius').value;

    // Convert the input to a number
    const radius = parseFloat(radiusInput);

    // Validate the radius
    if (isNaN(radius) || radius < 0) {
        // If invalid, set the volume field to NaN
        document.getElementById('volume').value = 'NaN';
        return;
    }

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the volume rounded to four decimal places
    document.getElementById('volume').value = volume.toFixed(4);
}

// Attach the function to the form's submit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
