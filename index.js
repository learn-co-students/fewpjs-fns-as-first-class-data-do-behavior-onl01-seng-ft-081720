/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
    let hour= parseInt(time.split(":")[0]);
    if (hour < 12 ) {
      return "Good Morning";
    } else if (hour >= 12 && hour <= 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
}

function displayMessage(message) {
  let element = document.querySelector("h1#greeting");
  element.innerText= message;
}