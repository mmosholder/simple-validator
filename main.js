// var phoneNumber = prompt("Please enter your phone number");
// if(isNaN(phoneNumber) === true && phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-" ) {
// 	alert("yes");
// }
// else {
// 	alert("please enter a valid phone number xxx-xxx-xxxx")
// } 

// var birthDate = prompt("Please enter your birthdate");
// if(birthDate.length === 8 && birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/") {
// 	alert("yes!");
// }
// else {
// 	alert("Please enter a valid birthdate xx/xx/xx")
// }

// var postalCode = prompt("Please enter you postal code");
// if(postalCode.length === 4) {
// 	alert("yes!");
// }
// else if(postalCode.length === 9 && postalCode.charAt(5) === "-") {
// 	alert("yes!");
// }
// else {
// 	alert("Please enter a valid postal code xxxxx or xxxxx-xxxx")
// }

// var stateAbbr = prompt("Please enter your state abbreviation");
// if(stateAbbr.length === 2 && stateAbbr == stateAbbr.toUpperCase()) {
// 	alert("yes!");
// }
// else {
// 	alert("Please use 2 letter abbreviation, and all caps");
// }

var married = prompt("Are you married?");
if(married.toUpperCase() === "YES" || married.toUpperCase() === "NO") {
	alert("thanks!");
}
else {
	alert("please answer yes or no");
}