const lodgingData = [
  // --- USA ---
  { city: "Atlanta", type: "Hotel", name: "Downtown Fan Hotel",
    price: 150, guests: 2, distance: 5,
    image: "https://via.placeholder.com/400x250?text=Atlanta+Hotel" },

  { city: "Atlanta", type: "Rental", name: "Cozy Apartment Near Stadium",
    price: 120, guests: 4, distance: 10,
    image: "https://via.placeholder.com/400x250?text=Atlanta+Rental" },

  { city: "Boston", type: "Rental", name: "Modern Boston Condo",
    price: 200, guests: 3, distance: 8,
    image: "https://via.placeholder.com/400x250?text=Boston+Rental" },

  { city: "Dallas", type: "Hotel", name: "Dallas Matchday Hotel",
    price: 180, guests: 2, distance: 6,
    image: "https://via.placeholder.com/400x250?text=Dallas+Hotel" },

  { city: "Houston", type: "Rental", name: "Spacious Houston Home",
    price: 160, guests: 5, distance: 15,
    image: "https://via.placeholder.com/400x250?text=Houston+Rental" },

  { city: "Kansas City", type: "Hotel", name: "KC Stadium Hotel",
    price: 170, guests: 2, distance: 7,
    image: "https://via.placeholder.com/400x250?text=Kansas+City+Hotel" },

  { city: "Los Angeles", type: "Hotel", name: "Luxury Suites LA",
    price: 260, guests: 2, distance: 15,
    image: "https://via.placeholder.com/400x250?text=Los+Angeles+Hotel" },

  { city: "Los Angeles", type: "Rental", name: "LA Beachside Apartment",
    price: 220, guests: 4, distance: 20,
    image: "https://via.placeholder.com/400x250?text=Los+Angeles+Rental" },

  { city: "Miami", type: "Rental", name: "Miami Waterfront Condo",
    price: 230, guests: 4, distance: 12,
    image: "https://via.placeholder.com/400x250?text=Miami+Rental" },

  { city: "New York", type: "Hotel", name: "NYC Fan Tower Hotel",
    price: 300, guests: 2, distance: 25,
    image: "https://via.placeholder.com/400x250?text=New+York+Hotel" },

  { city: "Philadelphia", type: "Rental", name: "Philly Rowhouse Stay",
    price: 140, guests: 3, distance: 10,
    image: "https://via.placeholder.com/400x250?text=Philadelphia+Rental" },

  { city: "San Francisco", type: "Hotel", name: "Bay Area Stadium Hotel",
    price: 280, guests: 2, distance: 18,
    image: "https://via.placeholder.com/400x250?text=San+Francisco+Hotel" },

  { city: "Seattle", type: "Rental", name: "Seattle Skyline Loft",
    price: 210, guests: 3, distance: 9,
    image: "https://via.placeholder.com/400x250?text=Seattle+Rental" },

  // --- Canada ---
  { city: "Toronto", type: "Rental", name: "Toronto Downtown Loft",
    price: 220, guests: 3, distance: 10,
    image: "https://via.placeholder.com/400x250?text=Toronto+Rental" },

  { city: "Toronto", type: "Hotel", name: "Toronto Fan Hotel",
    price: 240, guests: 2, distance: 7,
    image: "https://via.placeholder.com/400x250?text=Toronto+Hotel" },

  { city: "Vancouver", type: "Hotel", name: "Vancouver Harbor Hotel",
    price: 210, guests: 2, distance: 6,
    image: "https://via.placeholder.com/400x250?text=Vancouver+Hotel" },

  { city: "Vancouver", type: "Rental", name: "Vancouver Mountain View Suite",
    price: 190, guests: 4, distance: 14,
    image: "https://via.placeholder.com/400x250?text=Vancouver+Rental" },

  // --- Mexico ---
  { city: "Mexico City", type: "Hotel", name: "Mexico City Center Hotel",
    price: 180, guests: 2, distance: 5,
    image: "https://via.placeholder.com/400x250?text=Mexico+City+Hotel" },

  { city: "Mexico City", type: "Rental", name: "Historic District Apartment",
    price: 150, guests: 3, distance: 12,
    image: "https://via.placeholder.com/400x250?text=Mexico+City+Rental" },

  { city: "Guadalajara", type: "Rental", name: "Guadalajara Family Home",
    price: 130, guests: 5, distance: 10,
    image: "https://via.placeholder.com/400x250?text=Guadalajara+Rental" },

  { city: "Monterrey", type: "Hotel", name: "Grand Monterrey Hotel",
    price: 210, guests: 3, distance: 8,
    image: "https://via.placeholder.com/400x250?text=Monterrey+Hotel" }
];

// DOM elements
const citySelect      = document.getElementById('host-city');
const typeFilter      = document.getElementById('type-filter');
const guestsFilter    = document.getElementById('guests-filter');
const minPriceInput   = document.getElementById('min-price');
const maxPriceInput   = document.getElementById('max-price');
const maxDistanceInput= document.getElementById('max-distance');
const sortBySelect    = document.getElementById('sort-by');
const lodgingContainer= document.getElementById('lodging-container');

function displayListings() {
  const selectedCity   = citySelect.value;
  const selectedType   = typeFilter.value;
  const selectedGuests = guestsFilter.value;
  const minPrice       = minPriceInput.value ? parseFloat(minPriceInput.value) : null;
  const maxPrice       = maxPriceInput.value ? parseFloat(maxPriceInput.value) : null;
  const maxDistance    = maxDistanceInput.value ? parseFloat(maxDistanceInput.value) : null;
  const sortBy         = sortBySelect.value;

  lodgingContainer.innerHTML = '';

  if (!selectedCity) {
    lodgingContainer.innerHTML = '<p>Please select a city to see available properties.</p>';
    return;
  }

  let filtered = lodgingData.filter(l => l.city === selectedCity);

  if (selectedType) {
    filtered = filtered.filter(l => l.type === selectedType);
  }

  if (selectedGuests) {
    filtered = filtered.filter(l => l.guests >= parseInt(selectedGuests));
  }

  if (minPrice !== null) {
    filtered = filtered.filter(l => l.price >= minPrice);
  }

  if (maxPrice !== null) {
    filtered = filtered.filter(l => l.price <= maxPrice);
  }

  if (maxDistance !== null) {
    filtered = filtered.filter(l => l.distance <= maxDistance);
  }

  // Sorting
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'distance-asc') {
    filtered.sort((a, b) => a.distance - b.distance);
  } else if (sortBy === 'distance-desc') {
    filtered.sort((a, b) => b.distance - a.distance);
  }

  if (filtered.length === 0) {
    lodgingContainer.innerHTML = `<p>No listings found for your filters in ${selectedCity}.</p>`;
    return;
  }

  filtered.forEach(l => {
    const card = document.createElement('div');
    card.className = 'lodging-card';

    card.innerHTML = `
      <img class="lodging-image" src="${l.image}" alt="${l.name}">
      <div class="lodging-details">
        <h3>${l.name}</h3>
        <div class="lodging-meta">
          <span><strong>Type:</strong> ${l.type}</span>
          <span><strong>Guests:</strong> ${l.guests}</span>
        </div>
        <div class="lodging-meta">
          <span><strong>Price:</strong> $${l.price}/night</span>
          <span><strong>Distance:</strong> ${l.distance} min from stadium</span>
        </div>
      </div>
    `;

    lodgingContainer.appendChild(card);
  });
}

// Re-run search whenever something changes
[citySelect, typeFilter, guestsFilter, minPriceInput, maxPriceInput, maxDistanceInput, sortBySelect]
  .forEach(el => el.addEventListener('change', displayListings));
