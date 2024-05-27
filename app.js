// chapter 13-16

// ARRAYS
// 1. Declare an empty array using JS literal notation to store
// student names in future.

// let stdArray = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// let  stdArray = {name: []};

// 3. Declare and initialize a strings array.
// let strArry = ["Asia"];

// 4. Declare and initialize a numbers array.
// let numArray = [40];

// 5. Declare and initialize a boolean array.
// let bolArray = [true, false];

// 6. Declare and initialize a mixed array.
// let mixedArray = ["asia",40,true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// console.log(`Qualification`);
// let eduArray = ["SSC","HSC","BCS","BS","BCOM","MS"," M. Phil"," PhD"];
// let i = 0;
// eduArray.forEach((value) => {
//     console.log(`${i}) ${value}`);
//     i++
// });

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// let stdName = ["Micheal","John","Tony"];
// let score = [320,230,480];
// let percentage1 = (score[0]/500)*100
// let percentage2 = (score[1]/500)*100
// let percentage3 = (score[2]/500)*100

// console.log(`score of ${stdName[0]} is ${score[0]}. percentage: ${percentage1}%`);
// console.log(`score of ${stdName[1]} is ${score[1]}. percentage: ${percentage2}%`);
// console.log(`score of ${stdName[2]} is ${score[2]}. percentage: ${percentage3}%`);

// 9. Initialize an array with color names. Display the array
// elements in your browser.

// let colorName = ["pink" , "  yellow", "  red"];
// document.write( `${colorName}<br>`);

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// added in start
// colorName.unshift("black");
// document.write( `${colorName} <br>` );

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// added color in end
// colorName.push("white");
// document.write( `${colorName} <br>` );

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// colorName.unshift(" black","blue");
// document.write( `${colorName} <br>` );

// d. Delete the first color in the array. Display the updated
// array in your browser.
// deleted from start
// colorName.shift();
// document.write( `${colorName} <br>` );

// e. Delete the last color in the array. Display the updated
// array in your browser.
// delete from end
// colorName.pop();
// document.write( `${colorName} <br>` );

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// colorName[2] = "grey";
// document.write( `${colorName} <br>` );

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// colorName.splice(1,2);
// document.write( `${colorName} <br>` );

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let stdScore = [320,230,480,120];
// document.write(`score of students: ${ stdScore} <br>`);
// stdScore.sort();
// document.write(`orderd score of students: ${stdScore}`);

// 11. Write a program to initialize an array with city names.
// Copy 3 array

// document.write(`cities list <br>`);

// let cityName = ["karachi","lahore","islambad","quetta","peshwar"];
// document.write(`${ cityName }<br> <br>`)

// document.write(`selected cities list <br>`);
// let deleted = cityName.slice(2,4);
// document.write(`${deleted}<br> <br>`);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// let arr = ["This","is","my","cat"];
// let newArr = arr.join(' ,');
// console.log(`Array: \n`)
// console.log( newArr);
// let arr2 = ["This is my cat"];
// console.log(`String: \n`);
// console.log(`${arr2} \n`);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// console.log(`Devices`);
// let newArray = ["keyboard","mouse","printer","moniter"];
// console.log(`${ newArray } \n`)
// let newAry = newArray.shift();
// console.log(` out: \n ${ newAry }`);
// let newAry2 = newArray.shift();
// console.log(` out: \n ${ newAry2 }`);
// let newAry3 = newArray.shift();
// console.log(` out: \n ${ newAry3 }`);
// let newAry4 = newArray.shift();
// console.log(` out: \n ${ newAry4 }`);

// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)


//  console.log(`Devices`);
//  let newArray = ["keyboard","mouse","printer","moniter"];
//  console.log(`${ newArray } \n`);
//  let newArr1 = newArray.pop();
//  console.log(` out: \n ${ newArr1 }`);
//  let newArr2 = newArray.pop();
//  console.log(` out: \n ${ newArr2 }`);
//  let newArr3 = newArray.pop();
//  console.log(` out: \n ${ newArr3 }`);
//  let newArr4 = newArray.pop();
//  console.log(` out: \n ${ newArr4 }`);

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// let phoneManufacturers = ["Apple","  Samsung","Motorola","Nokia","Sony & Haier"];
// document.write(`<select><option>
// ${ phoneManufacturers [0]}`)




















