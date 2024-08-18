document.addEventListener('DOMContentLoaded', function() {
    const heroes = document.querySelectorAll('.hero');
    const banSlots = document.querySelectorAll('.ban-slot');
    const pickSlots = document.querySelectorAll('.pick-slot');

    heroes.forEach(hero => {
        hero.addEventListener('dragstart', dragStart);
    });

    banSlots.forEach(slot => {
        slot.addEventListener('dragover', dragOver);
        slot.addEventListener('drop', dropHero);
    });

    pickSlots.forEach(slot => {
        slot.addEventListener('dragover', dragOver);
        slot.addEventListener('drop', dropHero);
    });

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.dataset.hero);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function dropHero(event) {
        event.preventDefault();
        const heroName = event.dataTransfer.getData('text/plain');
        const heroElement = document.querySelector(`.hero[data-hero="${heroName}"]`);

        // Set hero image in the slot
        event.target.style.backgroundImage = `url('heroes/assassins/${heroName}.png')`;
        event.target.style.backgroundSize = 'cover';

        // Lock the hero in the pool
        if (heroElement) {
            heroElement.classList.add('locked');
            heroElement.draggable = false;
        }
    }
});
