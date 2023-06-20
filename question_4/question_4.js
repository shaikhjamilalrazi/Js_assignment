// 4.Window Object:
// a. Create a function that opens a new window with a specified URL and dimensions (width and height).

// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.

function openWindow(url, width, height) {
    window.open(url, "", "width=" + width + ",height=" + height);
}

openWindow("https://www.google.com", 800, 600);
