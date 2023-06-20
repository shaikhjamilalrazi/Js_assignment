// 14.AJAX Get Request:

// a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".

async function getData() {
    const url = "https://api.example.com/data";

    try {
        const response = await axios.get(url);
        // Do something with the response data
        console.log(response.data);
    } catch (error) {
        // Handle error
        console.error(error);
    }
}

getData();
