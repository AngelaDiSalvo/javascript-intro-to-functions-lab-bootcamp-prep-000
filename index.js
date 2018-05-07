var string = "I love you, Grandma."
var uppercase = "HELLO"
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello'
lowercase.toLowerCase() === lowercase // true
 
function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
     return "YES INDEED!"

   
  } 
}
//if (string.toLowerCase() === string) {
  //function sayHiToGrandma(string) {
    //return "I can't hear you!"
 // }
//} 

//if (string === "I love you, Grandma.") {
 // function sayHiToGrandma(string) {
  //  return "I love you, too."
 // }
//}
