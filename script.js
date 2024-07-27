const heroFilters = document.querySelectorAll('.filter-button');
const heroGrid = document.querySelector('.hero-grid');
const heroSlots = document.querySelectorAll('.hero-slot');
const banSlots = document.querySelectorAll('.ban-slot');

const heroes = [
  // Replace with your actual hero data
  { name: 'Layla', role: 'marksman', image: 'layla.png' },
  // ... other heroes
];

function filterHeroes(role) {
  const filteredHeroes = heroes.filter(hero => hero.role === role || role === 'all');

  heroGrid.innerHTML = '';

  filteredHeroes.forEach(hero => {
    const heroImage = document.createElement('img');
    heroImage.src = `images/${hero.role}/${hero.image}`;
    heroImage.alt = hero.name;
    heroImage.classList.add('hero-image');
    heroImage.addEventListener('click', () => {
      // Handle hero selection logic
    });
    heroGrid.appendChild(heroImage);
  });
}

heroFilters.forEach(button => button.addEventListener('click', (event) => filterHeroes(event.target.dataset.filter)));

// Hero selection logic
heroSlots.forEach(slot => {
  slot.addEventListener('click', () => {
    // Handle hero placement logic
  });
});

// Ban phase logic
banSlots.forEach(slot => {
  slot.addEventListener('click', () => {
    // Handle ban logic
  });
});
