// ===========================================
// Chapter 4 - VARIABLE NAMES: LEGAL & ILLEGAL 
// ===========================================

// Part 1
// Declare 3 variables in one statement
var userName, age, city;

// ---------------------------

// Part 2
// 5 legal & 5 illegal variable names

//  Legal:
var userName;
var age1;
var _myVariable;
var $price;
var city_name;

//  Illegal (commented out because these will give errors)
// var 123name;
// var my-name;
// var var;
// var user name;
// var alert;

// ---------------------------

// Part 3
// Display Rules for Naming JS Variables in browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS reserved keywords");

