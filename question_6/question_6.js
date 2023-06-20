// 6.Geolocation:

// a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.

function getCurrentLocation() {
    const geolocation = navigator.geolocation;
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
    };

    geolocation.getCurrentPosition(successCallback, errorCallback, options);

    function successCallback(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
    }

    function errorCallback(error) {
        switch (error.code) {
            case 1:
                console.log("Permission denied");
                break;
            case 2:
                console.log("Position unavailable");
                break;
            case 3:
                console.log("Timeout");
                break;
            default:
                console.log("Unknown error");
                break;
        }
    }
}

getCurrentLocation();
