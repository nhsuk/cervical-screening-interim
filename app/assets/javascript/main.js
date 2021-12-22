// ES6 or Vanilla JavaScript
function selectAll(event) {
    const scope = event.currentTarget.closest("fieldset");
    const inputs = scope.querySelectorAll("input[type=checkbox]");
    for(let input of inputs) {
      input.checked = event.currentTarget.checked;
    }
  }
  
  const selectAllBoxes = document.querySelectorAll("[data-select-all]");
  
  if (selectAllBoxes.length > 0){
    for (let box of selectAllBoxes) {
      box.addEventListener("click", selectAll); 
    }
  }