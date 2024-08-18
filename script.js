document.addEventListener('DOMContentLoaded', () => {
    const heroes = document.querySelectorAll('.hero');
    const slots = document.querySelectorAll('.droppable');

    let draggedHero = null;

    heroes.forEach(hero => {
        hero.addEventListener('dragstart', () => {
            draggedHero = hero;
            setTimeout(() => {
                hero.style.display = 'none'; // Hide hero during drag
            }, 0);
        });

        hero.addEventListener('dragend', () => {
            setTimeout(() => {
                draggedHero.style.display = 'block'; // Show hero after drag
                draggedHero = null;
            }, 0);
        });
    });

    slots.forEach(slot => {
        slot.addEventListener('dragover', e => {
            e.preventDefault();
        });

        slot.addEventListener('drop', () => {
            if (!slot.children.length && draggedHero) {
                slot.appendChild(draggedHero.cloneNode(true));
                draggedHero.style.display = 'none'; // Hide original hero after drop
                draggedHero = null;
                slot.classList.add('filled'); // Optional: Apply style for filled slot
            }
        });
    });
});
