/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let one = time.split(':');
  let two = parseInt(one);
 if (two < 12){
   return "Good Morning";
 }
   else if ((two >=12) && (two < 17)) {
   return "Good Afternoon";
   }
   else if (two >=17){
     return "Good Evening";
   }
  
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  let content = document.getElementById("greeting")
   content.innerHTML = string  
}