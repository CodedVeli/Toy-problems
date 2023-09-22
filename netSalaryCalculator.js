function calculateNetSalary() {

    const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
    const benefits = parseFloat(prompt("Enter Benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Invalid input! Please enter valid numbers.");
        return;
    }

    const taxRate = 0.3;  // 30% tax rate
    const nhifRate = 0.02;  // 2% NHIF rate
    const nssfRate = 0.06;  // 6% NSSF rate

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    const payee = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;

    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    // Display the results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhifDeduction}`);
    console.log(`NSSF Deductions: ${nssfDeduction}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Call the function to start the calculation
calculateNetSalary();
