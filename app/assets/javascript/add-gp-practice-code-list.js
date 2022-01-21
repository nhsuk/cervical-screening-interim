
// GP CODE JS BLOCK

// Add to a list

//Define empty array where NHS numbers will live when entered
var gpCode = []

//Define variables and helps the html talk to the javascript
var gpCodeinput = document.getElementById('gp-practice-code-input')
var gpCodelist = document.getElementById('gp-practice-code-list')
var gpCodeButton = document.getElementById('add-gp-practice-code')

//Listen for the add another link to be clicked
gpCodeButton.addEventListener('click', addNumberTolist);

//Function to save the nhs number and spit it back out above
function addNumberTolist() {
  var number = gpCodeinput.value; // get value of whats inside the box
  var gpCodelength = gpCode.push(number) //adds it to the array
  gpCodelist.innerHTML+="<li id='gp-code-"+gpCodelength+"' name='gp-code-data' value='{{ data['gp-code-data'] }}'><strong>"+number+"</strong> <span class='nhsuk-body-s' style='display: inline; text-decoration: underline; margin-left:6px'><a class='remove-link' href='javascript:removeNumberFromList("+gpCodelength+")'> Remove </a> </span> </li>"//spit it back out (with some added extras)
  gpCodeinput.value="" // clears the box for the next input
  
}

function removeNumberFromList(id) {
  var gpCodeElement = document.getElementById('gp-code-'+id);
  gpCodeElement.parentNode.removeChild(gpCodeElement);
}

