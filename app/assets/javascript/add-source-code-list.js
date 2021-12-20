
// SOURCE CODE JS BLOCK


// Add to a list

//Define empty array where NHS numbers will live when entered
var sourceCodes = []
//Define variables and helps the html talk to the javascript
var sourceCodeinput = document.getElementById('source-code-input')
var sourceCodelist = document.getElementById('source-code-list')
var sourceCodeButton = document.getElementById('add-source-code')

//Listen for the add another link to be clicked
sourceCodeButton.addEventListener('click', addNumberTolist);

//Function to save the nhs number and spit it back out above
function addNumberTolist() {
  var number = sourceCodeinput.value; // get value of whats inside the box
  var sourceCodelength = sourceCodes.push(number) //adds it to the array
  sourceCodelist.innerHTML+="<li id='source-code-"+sourceCodelength+"' name='source-code-data' value='{{ data['source-code-data'] }}'><strong>"+number+"</strong> <span class='nhsuk-body-s' style='display: inline; text-decoration: underline; margin-left:6px'><a class='remove-link' href='javascript:removeNumberFromList("+sourceCodelength+")'> Remove </a> </span> </li>" //spit it back out (with some added extras)
  sourceCodeinput.value="" // clears the box for the next input
  
}

function  removeNumberFromList(id) {
  var sourceCodeElement = document.getElementById('source-code-'+id);
  sourceCodeElement.parentNode.removeChild(sourceCodeElement);
}

