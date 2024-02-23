//---------<<<---- Strings in Javascript 20-Feb-2024 ------------>>> ----- 11 -------->>>>>>



///------------------------<<<---- END ---->>>--------------------------------///









//---------<<<---- Stack and Heap memory 20-Feb-2024 ------------>>> ----- 10 -------->>>>>>
//++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Stack (Primitive), Heap (Non-Primitive)

// _______Stack Not Change First Value --- Show Second Value // _______ 
// let check_one = "Web Designer";
// let check_two = check_one;
// check_two = "UI and UX Designer";
// console.log(check_one);
// console.log(check_two);


//_______ Heap Chnage the Value in the main User--- Change the Real value in main Subject Heap ch Rafrance mile da hai// _______ 
// let userOne =  {
//     name : "Navpreet Singh",
//     email : "navi@gmail.com",
//     upi : "nav@sbi"
// }
// let userTwo = userOne;
// userOne.email = "333navi@gmail.com";
// console.log(userOne.email);
// console.log(userTwo.email);
///------------------------<<<---- END ---->>>--------------------------------///









//---------<<<---- Data types of javascript summary [{INTERVIEW QUESTION}] 20-Feb-2024 ------------>>> ----- 9 -------->>>>>>

// 2 types Primitive date Reference (Non primitive)
// _______Primitive date type is 
// 7 type : string, Number, Boolearn, null, underfined, Symbol, BigInt

//_______is javascript a static or dynamic language /////_______ this is JS Dynamic Language


// _______Reference (Non primitive) this is Reference (Non primitive) tyes___________
// Array, Objects, Functions
//const heros =["Navi", "Aman", "Kabir"]; // this is Array


//// Objects is kerala Breact start and object add key value pair ch ker da hai iss ch date type kuch bhi ho sake da hai  
// let myObj = {
//             name : "Navi",
//             age : 31,
//             }   
// //console.log(myObj);

// //___________Function___________
// let myFunction = function () {
//         console.log("Hello World");
// }
// console.log(myFunction);

///------------------------<<<---- END ---->>>--------------------------------///









//---------<<<---- Comparison of datatypes 20-Feb-2024 ------------>>> ----- 8 -------->>>>>>
//console.log(6 > 5); 6 -- 5 to bigger hai kya
// console.log(10 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

///------------------------<<<---- END ---->>>--------------------------------///









//---------<<<---- string to number conversion operations 20-Feb-2024 ------------>>> ----- 7 -------->>>>>>

//__________Negative Values Show__________
// let value = 3;
// let negValue = -value
// console.log(typeof negValue);

//__________String Marriage__________
// let str1 = "Hello";
// let str2 = " Dummy Text";
// let str3 = str1 + str2;
// console.log(str3);

//__________counter Add++ __________
// let gameCounter = 100;
// gameCounter ++;
// console.log(gameCounter);


///------------------------<<<---- END ---->>>--------------------------------///









//---------<<<---- Datatype conversion confusion 20-Feb-2024 ------------>>> ----- 6 -------->>>>>>
//let score = "33Abc";
//console.log(typeof score);
//console.log(typeof (score));

//Pela String c fer String to number ch convert ker ta 
//let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


//__________ convert in Boolean __________

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// ja 1 hoie gyea ta 1=> true; ja 0 hopie gyea ta 0=> false
// same ---> "" => false
// same ---> "navi" => true


//__________ convert in String __________

// let someNumber = 7878;
// let stringNumber = String(someNumber);
// console.log(typeof stringNumber);

///------------------------<<<---- END ---->>>--------------------------------///








//-----------<<<---- Datatypes and ECMA standards 20-Feb-2024 ------------>>> ----- 5 -------->>>>>>
//"use strict" // Treat all JS Code as Newer Version
// alert(3+45)

// JavaScript has 8 Datatypes
// 1. String => ""
// 2. Number => 234
// 3. Bigint => 345234578567345n this is big number convert to {Bigint}
// 4. Boolean => True/False
// 5. Undefined =>
// 6. Null => Standalone Value {Represent hai Empty Value da}
// 7. Symbol => value nu Unique bena lei use ker lei 
// 8. Object =>

// typeof --> console.log(typeof true) check value type Which type is
// console.log(typeof true);

///------------------------<<<---- END ---->>>--------------------------------///









//-----------<<<---- Let, const and var 20-Feb-2024 ------------>>> ----- 4 -------->>>>>>

// const accountId = 78; // not changed
// let accountEmail = "Navpreetindi@gmail.com"; // Allow change enable info

// /*** Prefer not to use VAR Because of issue in block scope and functional scope ***/
// var accountPassword = "Bassi@2978&*!"; 
// accountCity = "Chandighar";


// // Chnage Info
// accountEmail = "Change@gmail.com"; 
// accountPassword = "Change Bassi@2978&*!";
// accountCity = "Change Chandighar";

// let accountState;

// console.log(accountId);
// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

///------------------------<<<---- END ---->>>--------------------------------///