// Chapter No 1 start

// Answer No 1:
// alert("Hello World!");

// Answer No 2:
// alert("Error! Please Enter a valid password.");

// Answer No 3:
// alert("Welcome to JS Land...\nHappy Coding!");

// Answer No 4:
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// Answer No 5:
// Done

// Answer No 6:
// Done

// Answer No 7:
// Done

// Chapter No 1 End

// -------------------------

// Chapter No 2 Start

// Answer No 1:
// var username;

// Answer No 2:
// var myName = "Muhammad Raza Bangi";

// Answer No 3:
// var message = "Hello World!";
// alert(message);

// Answer No 4:
// var stdName = "Muhammad Raza Bangi";
// var stdAge = 23;
// var stdCourse = "Mern Development";
// alert(stdName);
// alert(stdAge);
// alert(stdCourse);

// Answer No 5:
// var str = "Pizza";
// var newStrArr = [];
// for (var i = str.length; i >= 1; i--) {
//     newStrArr.push(str.slice(0, i));
// }
// var newStr = newStrArr.join(",");
// var result = newStr.replace(/,/g, '\n');
// alert(result);

// Answer No 6:
// var email = "muhammadrazabangi9@gmail.com";
// var message = "My email address is: ";
// alert(`${message} ${email}`);

// Answer No 7:
// var book = "A smarter way to learn javascript";
// var message = "I am trying to learn from the book";
// alert(`${message} ${book}`);

// Answer No 8:
// document.write("Yah! I can write HTML content through JavaScript");

// Answer No 9:
// var pattern = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(pattern);

// Chapter No 2 End

// -------------------------

// Chapter No 3 Start

// Answer No 1:
// var age = 23;
// alert(`I am ${age} year old.`);

// Answer No 2:
// var visitors = 0;
// visitors++;
// alert(`You have visited this site ${visitors} times.`);

// Answer No 3:
// var birthYear = 1997;
// document.write(`My birth year is ${birthYear} <br>`);
// document.write(`Data type of my declared variable is ${typeof birthYear}`);

// Answer No 4:
// var storeName = "www.daraz.pk";
// var visitorName = "Muhammad Raza Bangi";
// var productTitle = "Iphone 12 pro max black with official warranty";
// var quantity = 5;
// document.write(`${visitorName} ordered ${quantity} ${productTitle} on ${storeName}`);

// Chapter No 3 End

// -------------------------

// Chapter No 4 Start

// Answer No 1:
// var name, age, designation;

// Answer No 2:
// Five Legal Variables:
// var legalVariables = "Bangi"; 
// var legal_variables = "Bangi"; 
// var _LEGAL_VARIABLE_ = "Bangi"; 
// var legalVar123 = "Bangi"; 
// var $legalvariable = "Bangi"; 

// Five Illegal Variables:
// var illegal-variable = "Bangi";
// var %illegalvarialble = "Bangi";
// var function = "Bangi";
// var class = "Bangi";
// var 123IllegalVariable = "Bangi";

// Answer No 3:
// A:
// document.getElementById("heading").innerHTML = "Rules for naming JS variables";

// B:
// document.getElementById("point-a").innerHTML = "Variable names only contain <b>_</b> , <b>$</b> , <b>numbers</b> and <b>string</b> For Example: <b>$my_1stVariable</b>";

// C:
// document.getElementById("point-b").innerHTML = "Variable must begin with a <b>_</b> , <b>$</b> and <b>string</b> For Example: <b>$name</b> , <b>_name</b> and <b>name</b>";

// D:
// document.getElementById("point-c").innerHTML = "Variable names are <b>case sensitive</b>";

// E:
// document.getElementById("point-d").innerHTML = "Variable names should not be <b>JS keywords</b>";

// Chapter No 4 End

// -------------------------

// Chapter No 5 Start

// Answer No 1:
// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number");
// document.write(`Sum of ${num1} and ${num2} is ${num1 + num2}`);

// Answer No 2:
// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number");
// document.write(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`);

// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number");
// document.write(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`);

// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number");
// document.write(`Division of ${num1} and ${num2} is ${num1 / num2}`);

// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number");
// document.write(`Modules of ${num1} and ${num2} is ${num1 % num2}`);

// Answer No 3:
// A:
// var number;
// // B:
// document.write(`Value after variable declaration is: ${number}`);
// // C:
// number = 5;
// // D:
// document.write(`<br>Initial Value is: ${number}`);
// // E:
// number++;
// // F:
// document.write(`<br>Value after increment is: ${number}`);
// // G:
// number += 7;
// // H:
// document.write(`<br>Value after addition is: ${number}`);
// // I:
// number--;
// // J:
// document.write(`<br>Value after decrement is: ${number}`);
// // K:
// number %= 3;
// // L:
// document.write(`<br>The remainder is: ${number}`);

// Answer No 4:
// var quantity = 5;
// var ticketPrice = 600;
// document.write(`Total cost to buy ${quantity} tickets to a movie is ${ticketPrice * quantity}PKR`);

// Answer No 5:
// var table = +prompt("Enter a number for display the table");
// document.getElementById("heading").innerHTML = `Table of ${table}`;
// for (let i = 1; i <= 10; i++) {
//     document.write(`${table} x ${i} = ${table * i}<br>`);
// }

// Answer No 6:
// var celsius = 25;
// var fahrenheit = 70;
// celsius1 = (fahrenheit - 32) / 1.8;
// fahrenheit1 = (celsius * 1.8) + 32;
// document.write(`<span>&#8451;</span> = ( <span>&#8457;</span> - 32 ) x 1.8<br>`);
// document.write(`<span>&#8457;</span> = ( <span>&#8451;</span> x 1.8 ) + 32<br>`);
// document.write(`${celsius}<span>&#8451;</span> is ${celsius1}<span>&#8457;</span><br>`);
// document.write(`${fahrenheit}<span>&#8457;</span> is ${fahrenheit1}<span>&#8451;</span><br>`);

// Answer No 7:
// var product1 = 650;
// var product2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var shippingCharges = 100;
// document.write(`Total cost of your order is: ${product1 * quantity1 + shippingCharges + product2 * quantity2}`);

// Answer No 8:
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = obtainedMarks/totalMarks * 100;
// document.write(`Total marks: ${totalMarks}`);
// document.write(`<br>Marks obtained: ${obtainedMarks}`);
// document.write(`<br>Percentage: ${percentage}`);

// Answer No 9:
// var forUsCurrency = 104.80;
// var forSaudiCurrency = 28;
// var quantityForUS = +prompt("How many dollars you have?");
// var quantityForRiyal = +prompt("How many riyals you have?");
// var totalUsCurrency = forUsCurrency * quantityForUS;
// var totalRiyalCurrency = forSaudiCurrency * quantityForRiyal;
// var subTotal = totalRiyalCurrency + totalUsCurrency;
// document.write(`Total Currency in PKR: ${subTotal}`);

// Answer No 10:
// var number = 10;
// number += 5;
// number *= 10;
// number /= 2;
// document.write("Result: ",number);

// Answer No 11:
// document.getElementById("heading").innerHTML = "Age Calculator:";
// var currentYear = +prompt("Enter Current Year:");
// var birthYear = +prompt("Enter Your Birth Year:");
// document.write(`Current Year: ${currentYear}`);
// document.write(`<br>Birth Year: ${birthYear}`);
// document.write(`<br>Your Age is: ${currentYear - birthYear}`);

// Answer No 12:
// document.getElementById("heading").innerHTML = "The Geometrizer";
// var radius = 20;
// const pi = 3.142;
// var circumferenceOfACircle = 2 * pi * radius;
// var areaOfACircle = pi * (radius**2);
// document.write(`Radius of a circle: ${radius}`);
// document.write(`<br>The circumference is: ${circumferenceOfACircle}`);
// document.write(`<br>The area is: ${areaOfACircle}`);

// Answer No 13:
// var snack = "lays";
// var age = 24;
// var maxAge = 63;
// var maxAmountPerDay = 3;
// var eatUntilMaxAge = (maxAge - age) * maxAmountPerDay;
// document.write(`You will need ${eatUntilMaxAge} ${snack} to last you until the ripe old age of ${maxAge}`); 

// Chapter No 5 End

// ----------------------------

// Chapter No 6 to 9 Start

// Answer No 1:
// var a = 10;
// document.write(`The value of a is: ${a}`);
// document.write("<br>----------------------");
// document.write(`<br>The value of ++a is: ${++a}`);
// document.write(`<br>Now the value of a is: ${a}`);
// document.write(`<br><br>The value of a++ is: ${a++}`);
// document.write(`<br>Now the value of a is: ${a}`);
// document.write(`<br><br>The value of --a is: ${--a}`);
// document.write(`<br>Now the value of a is: ${a}`);
// document.write(`<br><br>The value of a-- is: ${a--}`);
// document.write(`<br>Now the value of a is: ${a}`);

// Answer No 2:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write(`--a: ${--a}`);
// document.write(`<br>--a - --b: ${--a - --b}`);
// document.write(`<br>--a - --b + ++b: ${--a - --b + ++b}`);
// document.write(`<br>--a - --b + ++b + b--: ${--a - --b + ++b + b--}`);

// document.write(`<br><br>a is: ${a}`);
// document.write(`<br>b is: ${b}`);
// document.write(`<br>result is: ${--a - --b + ++b + b--}`);

// Answer No 3:
// var userName = prompt("Enter your name");
// alert(`Have a nice day ${userName}!`);

// Answer No 4:
// Missing in your pdf

// Answer No 5:
// var number = +prompt("Enter a number for table:");
// if(number == '') {
//     for (let i = 1; i <= 10; i++) {
//         document.write(`5 x ${i} = ${5 * i}<br>`);
//     }
// } else {
//     for (let i = 1; i <= 10; i++) {
//         document.write(`${number} x ${i} = ${number * i}<br>`);
//     }
// }

// Answer No 6:
// var english = "English";
// var urdu = "Urdu";
// var islamiat = "Islamiat";
// var englishTotal = 100; 
// var urduTotal = 100; 
// var islamiatTotal = 100; 
// var englishObtained = 85;
// var urduObtained = 75;
// var islamiatObtained = 95;
// var englishPercentage = (englishObtained / englishTotal) * 100;
// var urduPercentage = (urduObtained / urduTotal) * 100;
// var islamiatPercentage = (islamiatObtained / islamiatTotal) * 100;

// var subTotal = englishTotal + urduTotal + islamiatTotal;
// var obtainedTotal = englishObtained + urduObtained + islamiatObtained;
// var overallPercentage = (obtainedTotal / subTotal) * 100;

// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

// table.appendChild(thead);
// table.appendChild(tbody);

// document.getElementById('body').appendChild(table);

// let row_1 = document.createElement('tr');
// let headingArr = ["Subject","Total Marks","Obtained Marks","Percentage"];
// for (let i = 0; i < 4; i++) {
//     let heading_i = document.createElement('th');
//     heading_i.innerHTML = headingArr[i];
//     row_1.appendChild(heading_i);
// }
// thead.appendChild(row_1);

// let englishSubjectArr = [english,englishTotal,englishObtained,englishPercentage+"%"];
// let row_2 = document.createElement('tr');
// for (let i = 0; i < 4; i++) {
//     let row_2_data_i = document.createElement('td');
//     row_2_data_i.innerHTML = englishSubjectArr[i];
//     row_2.appendChild(row_2_data_i);
// }
// tbody.appendChild(row_2);

// let urduSubjectArr = [urdu,urduTotal,urduObtained,urduPercentage+"%"];
// let row_3 = document.createElement('tr');
// for (let i = 0; i < 4; i++) {
//     let row_3_data_i = document.createElement('td');
//     row_3_data_i.innerHTML = urduSubjectArr[i];
//     row_3.appendChild(row_3_data_i);
// }
// tbody.appendChild(row_3);

// let islamiatSubjectArr = [islamiat,islamiatTotal,islamiatObtained,islamiatPercentage+"%"];
// let row_4 = document.createElement('tr');
// for (let i = 0; i < 4; i++) {
//     let row_4_data_i = document.createElement('td');
//     row_4_data_i.innerHTML = islamiatSubjectArr[i];
//     row_4.appendChild(row_4_data_i);
// }
// tbody.appendChild(row_4);

// let totalArr = ["Sub Total",subTotal,obtainedTotal,overallPercentage+"%"];
// let row_5 = document.createElement('tr');
// for (let i = 0; i < 4; i++) {
//     let row_5_data_i = document.createElement('td');
//     row_5_data_i.innerHTML = totalArr[i];
//     row_5.appendChild(row_5_data_i);
// }
// tbody.appendChild(row_5);

// Answer No 7:
// Not found on your pdf

// Chapter No 6 to 9 End

// -------------------------------------

// Chapter No 9 to 11 Start



// Chapter No 9 to 11 End


