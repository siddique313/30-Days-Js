// Day 3: Control Structures
// Task/Activities
// Activity 1:If Else Statements
// // Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// // let checkNumber = prompt("Please Enter the Number");
function checkNumber(num){

    if (num < 0) {
        console.log('negative');
    }else {
        console.log('positive')
    }
    }
    // console.log(checkNumber(-1));
    
    
    // Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
    
    
    function eligible(age ){
        return age >= 18? 'eliglible' : 'not eligible'
    }
    console.log(eligible(12));
    
    // Activity 2: Nested If-Else Statements
    // Task 3: Write a program to find the largest of three numbers using neested if-else statements.
    
    const num1 = 40
    const num2 = 60
    const num3 = 9
    
    if (num1 >= num2 && num1 >= num3 ) {
        console.log('sumall number', num1);
    }else if (num2 >= num1 && num2 >= num3) {
        console.log('midium number',num2);
    }else {
        console.log('larger number',num3);
    }
    
    // Activity 3:  Switch Case
    // Task 4: Write a program that users a switch case to determined the day of yhe week based on a number (1 - 7) and the log the day name to the console.
    
    let week = 4
    switch (week) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thrsday');
            break;
        case 5:
            console.log('Firaday');
            break;
        case 6:
            console.log('Sturatday');
            break;
        case 7:
            console.log('Sunday');
            break;
    
        default:
            console.log('inviled days');
            break;
    }
    
    // Task 5: Write a program that uses a switch case to assign grade ('A',B'C,'D','F) based on score and log the grade to the console.
    // let score = prompt("Enter a score")
    
    
    const score = 39
    switch (true) {
        case score < 40 :
            console.log('F');
            break;
        case score >= 40 && score < 50 :
            console.log('D');
            break;
        case score >= 50 && score < 70 :
            console.log('C');
            break;
        case score >= 70 && score < 90 :
            console.log('B');
            break;
        case score >= 90 && score <= 100 :
            console.log('A');
            break;
       
    
        default:
            console.log('some thing went wrong');
            break;
    
    }
    
    
    
    // Activity 4: Conditional (Ternary) operator
    // Task 6: Write a program that uses the ternary operator to check if a number is even or odd and the log the result to the console.
    
    let check = 4  % 2 === 0 ?'number is even':'odd number'
    console.log(check);
    
    
    // Activity 5: Combing Condition
    // Task 7: Write a program to check if a year is a leaf year using multiple condition (divisible by 4, but not 100 unless also dividisible by 400) and the log the result to the console.
    
    
    
    let year = 2024;
    let isLeafYear;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        isLeafYear = true;
    }
    else{
        isLeafYear = false;
    }
    console.log(isLeafYear);