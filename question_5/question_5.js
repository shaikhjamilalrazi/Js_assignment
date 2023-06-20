// 5.Navigator Object:

// a. Write a JavaScript function that detects the user's browser name and version using the navigator object.

// b. Implement the function to display the user's browser name and version.

function getBrowserNameAndVersion() {
    const appCodeName = navigator.appCodeName;
    const appVersion = navigator.appVersion;
    const browserName = {
        CrMo: "Chrome",
        Gecko: "Firefox",
        WebKit: "Safari",
        Opera: "Opera",
        EdgeHTML: "Edge",
    };
    const browser = {
        name: browserName[appCodeName] || appCodeName,
        version: appVersion.match(/\d+\.\d+/)[0],
    };
    return browser;
}

const browser = getBrowserNameAndVersion();
console.log(browser.name); // Chrome
console.log(browser.version); // 80.0.3987.16
