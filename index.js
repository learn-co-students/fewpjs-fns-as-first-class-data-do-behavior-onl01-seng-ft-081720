/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let x = time.split("", 2).join("")
  let int = parseInt(x)
   if (int < 12) {
    return "Good Morning"
  } else if (int < 24 && int > 17) {
    return "Good Evening"
  } else if (int >= 12 && int < 17) {
    return "Good Afternoon"
  } else {
    return 'TEST'
  }
}

function displayMessage(string){
  let headsies = document.getElementById('greeting')
  headsies.innerHTML = string
  // return string
}

// displayMessage("Garbage")

// displayMessage(greet("Any sort of string"))