
// POST CODE JS BLOCK

// Add to a list

//Define empty array where NHS numbers will live when entered
var postCodes = []
//Define variables and helps the html talk to the javascript
var postCodeinput = document.getElementById('post-code-input')
var postCodelist = document.getElementById('post-code-list')
var postCodeButton = document.getElementById('add-post-code')

//Listen for the add another link to be clicked
postCodeButton.addEventListener('click', addNumberTolist);

//Function to save the nhs number and spit it back out above
function addNumberTolist() {
  var number = postCodeinput.value; // get value of whats inside the box
  postCodes.push(number) //adds it to the array
  postCodelist.innerHTML+="<li><strong>"+number+"</strong> <span class='nhsuk-body-s' style='display: inline; text-decoration: underline; margin-left:6px'><a class='remove-link' data-nhsnumber='"+number+"'> Remove </a> </span> </li>" //spit it back out (with some added extras)
  postCodeinput.value="" // clears the box for the next input
  
}

