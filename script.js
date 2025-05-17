var firstName = "Tommy";
var lastName = "Hearns";
var username = "Username: " +
 firstName +
 " " + lastName;
console.log(username);

var characterName = "Ultron";
var character = "Character: " +
 characterName;
console.log(character);


document.getElementById("username")
 .innerHTML = username;
document.getElementById("character")
 .innerHTML = character;
