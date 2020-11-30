/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(timeString){
  let inputTime = timeString.split(':');
  let inputHour = parseInt(inputTime[0]);
  if (inputHour<12){
    return "Good Morning";
  } else if (inputHour>17){
    return "Good Evening";
  }
  return "Good Afternoon";
}


/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}