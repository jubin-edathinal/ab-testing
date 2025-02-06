// Function to randomly assign users to a variation
function assignVariation() {
    const variations = ['A', 'B']; // Add more variations if needed
    const randomIndex = Math.floor(Math.random() * variations.length);
    return variations[randomIndex];
}

// Function to apply the variation
function applyVariation(variation) {
    if (variation === 'A') {
        // Apply Version A (Control)
        document.getElementById('headline').innerText = 'Welcome to Our Website!';
        document.getElementById('button').style.backgroundColor = 'blue';
    } else if (variation === 'B') {
        // Apply Version B (Variant)
        document.getElementById('headline').innerText = 'Discover Our Amazing Offers!';
        document.getElementById('button').style.backgroundColor = 'green';
    }

    // Track the variation (optional, for analytics)
    console.log('User assigned to Variation:', variation);
}

// On page load, assign and apply the variation
window.onload = function () {
    const variation = assignVariation();
    applyVariation(variation);
};

document.getElementById('button').addEventListener('click', function () {
    const variation = assignVariation(); // Get the current variation
    gtag('event', 'click', {
        'event_category': 'Button',
        'event_label': 'Version ' + variation
    });
    console.log('Button clicked on Variation:', variation);
});