/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let parsed = parseInt(string.split(`:`))
  if (parsed < 12) {
    return `Good Morning`;
  }
  if (parsed > 12 && parsed < 17) {
    return `Good Afternoon`;
  }
  if (parsed > 16) {
    return `Good Evening`;
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  // document.getElementById('greeting').textContent = message; --> My implementation which works as well
  let element = document.querySelector("h1#greeting");
  element.innerText= message;
}
