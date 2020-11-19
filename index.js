/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(enteredTime) {

  time = enteredTime.split(":")[0]

  if (time < 12) {
    return "Good Morning"
  }
  if (time > 12 && time < 17) {
    return "Good Afternoon"
  }
  if (time > 17 ) {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  const greeting = document.querySelector('#greeting')
  greeting.innerText = msg
}
