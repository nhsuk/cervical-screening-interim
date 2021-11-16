
// SOURCE TYPE JS BLOCK


// Add to a list

//Define empty array where NHS numbers will live when entered
var sourceTypes = []
//Define variables and helps the html talk to the javascript
var sourceTypeinput = document.getElementById('source-type-input')
var sourceTypelist = document.getElementById('source-type-list')
var sourceTypeButton = document.getElementById('add-source-type')

//Listen for the add another link to be clicked
sourceTypeButton.addEventListener('click', addNumberTolist);

//Function to save the nhs number and spit it back out above
function addNumberTolist() {
  var number = sourceTypeinput.value; // get value of whats inside the box
  sourceTypes.push(number) //adds it to the array
  sourceTypelist.innerHTML+="<li><strong>"+number+"</strong> <span class='nhsuk-body-s' style='display: inline; text-decoration: underline; margin-left:6px'><a class='remove-link' data-nhsnumber='"+number+"'> Remove </a> </span> </li>" //spit it back out (with some added extras)
  sourceTypeinput.value="" // clears the box for the next input
  
}
