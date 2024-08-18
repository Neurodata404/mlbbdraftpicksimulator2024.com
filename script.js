function filterHeroes(role) {
    const heroes = document.querySelectorAll('.hero');
    heroes.forEach(hero => {
        if (role === 'all' || hero.classList.contains(role)) {
            hero.style.display = 'block';
        } else {
            hero.style.display = 'none';
        }
    });

    const tabs = document.querySelectorAll('.hero-tab');
    tabs.forEach(tab => {
        if (tab.textContent.toLowerCase() === role) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// Initial call to show all heroes
document.addEventListener('DOMContentLoaded', () => {
    filterHeroes('all');

    const heroes = document.querySelectorAll('.hero');

    heroes.forEach(hero => {
        const tooltip = document.createElement('div');
        tooltip.className = 'hero-tooltip';
        tooltip.innerText = hero.alt; // Use the alt attribute for the tooltip text
        hero.appendChild(tooltip); // Append the tooltip to the hero element
    });
});
