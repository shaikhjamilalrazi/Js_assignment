// 8.HTML DOM Document:

// a. Create a webpage with a button and a paragraph element.

// b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked.

function handleClick() {
    const paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "Button Clicked!";
}

document.getElementById("myButton").addEventListener("click", handleClick);
