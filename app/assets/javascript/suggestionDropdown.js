
const createSuggestionDropdown = (data, elementId) => {
    function customSuggest(query, syncResults) {
      const results = data;
      syncResults(
        query
          ? results.filter(function (result) {
              var codeContains =
                result.code.toLowerCase().indexOf(query.toLowerCase()) !== -1;
              var resultNameContains =
                result.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
              return codeContains || resultNameContains;
            })
          : []
      );
    }
  
    function inputValueTemplate(result) {
      return result && result.code;
    }
  
    function suggestionTemplate(result) {
      return result && `<div class="nhsuk-u-font-weight-bold autocomplete__option-code">${result.code}</div><div class="autocomplete__option-name">${result.name}</div>`;
    }
  
    const element = document.querySelector(`#${elementId}`);
    const id = `${elementId}-autocomplete`;
    accessibleAutocomplete({
      element: element,
      id: id,
      name: elementId,
      displayMenu: 'overlay',
      source: customSuggest,
      templates: {
        inputValue: inputValueTemplate,
        suggestion: suggestionTemplate,
      },
    });
}