
// LETTER CODE JS BLOCK

// Add to a list

//Define empty array where NHS numbers will live when entered
var letterCodes = []
//Define variables and helps the html talk to the javascript
var letterCodeinput = document.getElementById('letter-code-input')
var letterCodelist = document.getElementById('letter-code-list')
var letterCodeButton = document.getElementById('add-letter-code')

//Listen for the add another link to be clicked
letterCodeButton.addEventListener('click', addNumberTolist);

//Function to save the nhs number and spit it back out above
function addNumberTolist() {
  var number = letterCodeinput.value; // get value of whats inside the box
  var letterCodelength = letterCodes.push(number) //adds it to the array + adds to new variable
  letterCodelist.innerHTML+="<li id='letter-code-"+letterCodelength+"'><strong>"+number+"</strong> <span class='nhsuk-body-s' style='display: inline; text-decoration: underline; margin-left:6px'><a class='remove-link' href='javascript:removeNumberFromList("+letterCodelength+")'> Remove </a> </span> </li>" //spit it back out (with some added extras)
  letterCodeinput.value="" // clears the box for the next input
  
}

function  removeNumberFromList(id) {
  var letterCodeElement = document.getElementById('letter-code-'+id);
  letterCodeElement.parentNode.removeChild(letterCodeElement);
}



