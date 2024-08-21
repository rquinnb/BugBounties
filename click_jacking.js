// Create a transparent overlay div
const overlay = document.createElement('div');
overlay.style.position = 'absolute';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; // Slightly visible but can be adjusted
overlay.style.zIndex = '9999'; // Ensure it covers the target area
overlay.style.pointerEvents = 'auto'; // Make it intercept clicks

// Create a button that the user will think they are clicking
const fakeButton = document.createElement('button');
fakeButton.textContent = 'Click Me!';
fakeButton.style.position = 'absolute';
fakeButton.style.top = '50%';
fakeButton.style.left = '50%';
fakeButton.style.transform = 'translate(-50%, -50%)';
fakeButton.style.zIndex = '10000'; // Ensure it's on top of the overlay

// Set up click handler for the fake button
fakeButton.onclick = function() {
    alert('Fake button clicked! This is a clickjacking simulation.');
};

// Append the button and overlay to the body
document.body.appendChild(overlay);
document.body.appendChild(fakeButton);

// Position the fake button exactly over a real button (not shown in this code snippet, assumed to be in place)
// Ensure the z-index and positioning are set correctly to intercept clicks
