const button = document.getElementById("menuButton");
const menu = document.getElementById("menu");

button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    positionMenu();
});

function positionMenu() {
    const buttonRect = button.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();

    const spaceBelow = window.innerHeight - buttonRect.bottom;
    const spaceAbove = buttonRect.top;

    let top;

    if (spaceBelow < menuRect.height && spaceAbove > menuRect.height) {
        // open upward
        top = buttonRect.top - menuRect.height - 6;
    } else {
        // open downward
        top = buttonRect.bottom + 6;
    }

    menu.style.top = `${top}px`;
    menu.style.left = `${buttonRect.left}px`;
}

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== button) {
        menu.classList.add("hidden");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        menu.classList.add("hidden");
    }
});