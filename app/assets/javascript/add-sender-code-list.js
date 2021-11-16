
// SENDER CODE JS BLOCK


// Add to a list

//Define empty array where NHS numbers will live when entered
var senderCodes = []
//Define variables and helps the html talk to the javascript
var senderCodeinput = document.getElementById('sender-code-input')
var senderCodelist = document.getElementById('sender-code-list')
var senderCodeButton = document.getElementById('add-sender-code')

//Listen for the add another link to be clicked
senderCodeButton.addEventListener('click', addNumberTolist);

//Function to save the nhs number and spit it back out above
function addNumberTolist() {
  var number = senderCodeinput.value; // get value of whats inside the box
  senderCodes.push(number) //adds it to the array
  senderCodelist.innerHTML+="<li><strong>"+number+"</strong> <span class='nhsuk-body-s' style='display: inline; text-decoration: underline; margin-left:6px'><a class='remove-link' data-nhsnumber='"+number+"'> Remove </a> </span> </li>" //spit it back out (with some added extras)
  senderCodeinput.value="" // clears the box for the next input
  
}

