// 7.JS Common Events:

// Implement a webpage with the following functionality:

// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.

// b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.

// c. When the user moves the mouse over an image, change the image source to another image of your choice.

function handleClick(event) {
    const x = event.clientX;
    const y = event.clientY;

    alert(`Coordinates: (${x}, ${y})`);
}

function handleKeyPress(event) {
    const keycode = event.keyCode;

    alert(`Keycode: ${keycode}`);
}

function handleMouseOver(event) {
    const image = event.target;
    const src = image.src;

    image.src = "other-image.png";
}

document.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeyPress);
document.addEventListener("mouseover", handleMouseOver);
