/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
      let timeAsNumber = parseInt(time);
     
      if (timeAsNumber < 12) {
        return "Good Morning";
      } else if (timeAsNumber > 17) {
        return "Good Evening";
      } else {
          return "Good Afternoon";
      };
}

/* Write your implementation of displayMessage() */
function displayMessage(salute) {
  
  let message = document.getElementById("greeting");
  message.innerText = salute;
}


