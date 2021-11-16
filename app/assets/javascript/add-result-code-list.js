
// SOURCE TYPE JS BLOCK


// Add to a list

//Define empty array where NHS numbers will live when entered
var resultCodes = []
//Define variables and helps the html talk to the javascript
var resultCodeinput = document.getElementById('result-code-result')
var hpvCodeinput = document.getElementById('result-code-hpv')
var actionCodeinput = document.getElementById('result-code-action')
var resultCodelist = document.getElementById('result-code-list')
var resultCodeButton = document.getElementById('add-result-code')

//Listen for the add another link to be clicked
resultCodeButton.addEventListener('click', addNumberTolist);

//Function to save the nhs number and spit it back out above
function addNumberTolist() {
  var rCode = resultCodeinput.value; // get value of whats inside the box of Result input
  var hCode = hpvCodeinput.value; // get value of whats inside the box of HPV input
  var aCode = actionCodeinput.value; // get value of whats inside the box of result input
  var number = rCode+hCode+aCode; // combine the value of whats inside the box (Result+HPV+Action)
  resultCodes.push(number) //adds it to the array
  resultCodelist.innerHTML+="<li><strong>"+number+"</strong> <span class='nhsuk-body-s' style='display: inline; text-decoration: underline; margin-left:6px'><a class='remove-link' data-nhsnumber='"+number+"'> Remove </a> </span> </li>" //spit it back out (with some added extras)
  resultCodeinput.value="" // clears the result box for the next input
  hpvCodeinput.value="" // clears the hpv box for the next input
  actionCodeinput.value="" // clears the action box for the next input
  
}
