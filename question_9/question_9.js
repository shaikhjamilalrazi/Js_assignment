// 9.JS DOM Working with Form Input:

// Implement a webpage with a form that has the following fields:

// a. Name (text input)

// b. Email (email input)

// c. Password (password input)

// d. Confirm Password (password input)

// e. Submit (button)

// Implement JavaScript validation for the form fields:

// f. Name should not be empty and should contain only letters.

// g. Email should be a valid email address.

// h. Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.

// i. Confirm Password should match the Password field.

// j. Display appropriate error messages for invalid fields.

function validateForm() {
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;
    const confirmPassword = document.querySelector(
        "input[name='confirmPassword']"
    ).value;

    // Name validation
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
        alert("Your name should only contain letters.");
        return false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password validation
    if (password.length < 8) {
        alert("Your password must be at least 8 characters long.");
        return false;
    }

    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(password)) {
        alert("Your password must contain at least one lowercase letter.");
        return false;
    }

    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
        alert("Your password must contain at least one uppercase letter.");
        return false;
    }

    const digitRegex = /[0-9]/;
    if (!digitRegex.test(password)) {
        alert("Your password must contain at least one digit.");
        return false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        alert("Your passwords do not match.");
        return false;
    }

    return true;
}

document.querySelector("form").addEventListener("submit", validateForm);
