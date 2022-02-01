
// SENDER CODE JS BLOCK


// Add to a list

//Define empty array where NHS numbers will live when entered
var senderCodes = []
//Define variables and helps the html talk to the javascript
var senderCodelist = document.getElementById('sender-code-list')
var senderCodeButton = document.getElementById('add-sender-code')

//Listen for the add another link to be clicked
senderCodeButton.addEventListener('click', addNumberTolist);

//Function to save the nhs number and spit it back out above
function addNumberTolist() {
  var senderCodeinput = document.getElementById('sender-code-input-autocomplete')
  var number = senderCodeinput.value; // get value of whats inside the box
  var senderCodelength = senderCodes.push(number) //adds it to the array
  senderCodelist.innerHTML+="<li id='sender-code-"+senderCodelength+"'><strong>"+number+"</strong> <span class='nhsuk-body-s' style='display: inline; text-decoration: underline; margin-left:6px'><a class='remove-link' href='javascript:removeNumberFromList("+senderCodelength+")'> Remove </a> </span> </li>" //spit it back out (with some added extras)
  senderCodeinput.value="" // clears the box for the next input
  
}

function  removeNumberFromList(id) {
  var senderCodeElement = document.getElementById('sender-code-'+id);
  senderCodeElement.parentNode.removeChild(senderCodeElement);
}

