
// LETTER CODE JS BLOCK

// Add to a list

//Define empty array where NHS numbers will live when entered
var letterCodes = []
//Define variables and helps the html talk to the javascript
var letterCodelist = document.getElementById('letter-code-list')
var letterCodeButton = document.getElementById('add-letter-code')

//Listen for the add another link to be clicked
letterCodeButton.addEventListener('click', addNumberTolist);

//Function to save the nhs number and spit it back out above
function addNumberTolist() {
  if(document.getElementById('letter-codes-autocomplete').value != "") {
    var number = document.getElementById('letter-codes-autocomplete').value; // get value of whats inside the box
    var letterCodelength = letterCodes.push(number) //adds it to the array + adds to new variable
    letterCodelist.innerHTML+="<li id='letter-code-"+letterCodelength+"'name='letter-code-data' value='{{ data['letter-code-data'] }}'><strong>"+number+"</strong> <span class='nhsuk-body-s' style='display: inline; text-decoration: underline; margin-left:6px'><a class='remove-link' href='javascript:removeNumberFromList("+letterCodelength+")'> Remove </a> </span> </li>" //spit it back out (with some added extras)
    document.getElementById('letter-codes-autocomplete').value="" // clears the box for the next input
  }
  
}

function  removeNumberFromList(id) {
  var letterCodeElement = document.getElementById('letter-code-'+id);
  letterCodeElement.parentNode.removeChild(letterCodeElement);
}

// when seleting from the list, the value chosen is placed into a hidden input element programatically
// added to the DOM by the code running the accessible auto complete. This means that trying to get that element by ID at page load doesn't work because
// it doesn't exist until the user has selected a value.
// therefore, in the "addNumberToList" function we need to dynamically get the input element
// after it has been created, in order to get its value.


