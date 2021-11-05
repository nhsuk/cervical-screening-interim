
// CCG CODE JS BLOCK

// Add to a list

//Define empty array where NHS numbers will live when entered
var ccgCodes = []
//Define variables and helps the html talk to the javascript
var ccgCodeinput = document.getElementById('ccg-code-input')
var ccgCodelist = document.getElementById('ccg-code-list')
var ccgCodeButton = document.getElementById('add-ccg-code')

//Listen for the add another link to be clicked
ccgCodeButton.addEventListener('click', addNumberTolist);

//Function to save the nhs number and spit it back out above
function addNumberTolist() {
  var number = ccgCodeinput.value; // get value of whats inside the box
  ccgCodes.push(number) //adds it to the array
  ccgCodelist.innerHTML+="<li><strong>"+number+"</strong> <span class='nhsuk-body-s' style='display: inline; text-decoration: underline; margin-left:6px'><a class='remove-link' data-nhsnumber='"+number+"'> Remove </a> </span> </li>" //spit it back out (with some added extras)
  ccgCodeinput.value="" // clears the box for the next input
  
}

