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
window.onload = function() {
  // Check if a variation is already stored in Local Storage
  let variation = localStorage.getItem('abTestVariation');

  // If no variation is stored, assign a new one and store it
  if (!variation) {
    variation = assignVariation();
    localStorage.setItem('abTestVariation', variation);
  }

  // Apply the variation
  applyVariation(variation);
};
