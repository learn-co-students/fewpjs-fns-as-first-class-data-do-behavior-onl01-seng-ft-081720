/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hour = parseInt(timeString.split(":")[0])
  let minute = timeString.split(":")[1]
  if (hour < 12) {
      console.log("Good Morning")
      return "Good Morning"
    } else if (hour < 17) {
      console.log("Good Afternoon")
      return "Good Afternoon"
    } else {
      console.log("Good Evening")
      return "Good Evening"
  } 
  
  // console.log(timeString.split(":"))

}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  greeting = document.querySelector("#greeting")
  greeting.innerText = str
}