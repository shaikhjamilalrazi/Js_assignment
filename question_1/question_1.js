// 1.Date Object:
// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

// b. Implement the function to display the day of the week for the current date.

function getDayOfWeek(dateString) {
    const dateParts = dateString.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // Month is zero-based
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month, day);
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayOfWeek = daysOfWeek[date.getDay()];

    return dayOfWeek;
}

const dayOfWeek = getDayOfWeek("2023-06-19");
console.log(dayOfWeek); // Output: Monday
