
// NATIONAL CODE JS BLOCK

// Add to a list

//Define empty array where NHS numbers will live when entered
var nationalCodes = []
//Define variables and helps the html talk to the javascript
var nationalCodeinput = document.getElementById('national-code-input')
var nationalCodelist = document.getElementById('national-code-list')
var nationalCodeButton = document.getElementById('add-national-code')

//Listen for the add another link to be clicked
nationalCodeButton.addEventListener('click', addNumberTolist);

//Function to save the nhs number and spit it back out above
function addNumberTolist() {
  var number = nationalCodeinput.value; // get value of whats inside the box
  var nationalCodelength = nationalCodes.push(number) //adds it to the array
  nationalCodelist.innerHTML+="<li id='national-code-"+nationalCodelength+"' name='national-code-data' value='{{ data['national-code-data'] }}'><strong>"+number+"</strong> <span class='nhsuk-body-s' style='display: inline; text-decoration: underline; margin-left:6px'><a class='remove-link' href='javascript:removeNumberFromList("+nationalCodelength+")'> Remove </a> </span> </li>" //spit it back out (with some added extras)
  nationalCodeinput.value="" // clears the box for the next input
  
}

function  removeNumberFromList(id) {
  var nationalCodeElement = document.getElementById('national-code-'+id);
  nationalCodeElement.parentNode.removeChild(nationalCodeElement);
}

