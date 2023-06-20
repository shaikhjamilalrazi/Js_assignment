// 15.AJAX Post Request:

// a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit".

// b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }.

// Make sure to include the Axios library in your project

// Make sure to include the Axios library in your project

async function sendAjaxPostRequest() {
    let url = "https://api.example.com/submit";
    let payload = {
        name: "John Doe",
        email: "johndoe@example.com",
    };

    try {
        let response = await axios.post(url, payload);
        let data = response.data;
        console.log(data); // Do something with the response data
    } catch (error) {
        console.log(error); // Handle any errors
    }
}
