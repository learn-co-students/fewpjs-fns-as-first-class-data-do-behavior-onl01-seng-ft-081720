/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time) {
  const hour = parseInt(time,10);
  if (hour < 12) {
    return "Good Morning";
  }

  if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  }

  if (hour >= 17) {
    return "Good Evening";
  }
}

function displayMessage(content){
  console.log(content)
  let element = document.getElementById("greeting");
  element.innerText = `${content}`;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
