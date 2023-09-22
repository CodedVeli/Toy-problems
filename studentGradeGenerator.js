function calculateGrade() {
    const userInput = prompt("Enter student marks (0-100):");

    // Convert the user input to a number
    const marks = parseFloat(userInput);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input! Please enter a number between 0 and 100.");
        return;
    }

    let grade;

    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 50 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    alert(`Grade: ${grade}`);
}

calculateGrade();
