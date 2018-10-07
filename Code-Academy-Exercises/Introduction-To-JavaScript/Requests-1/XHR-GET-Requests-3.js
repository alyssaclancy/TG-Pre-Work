// Information to reach API
const url = 'https://api.datamuse.com/words?'
const queryParams = 'rel_rhy='

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;

  const xhr = new XMLHttpRequest ();

  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderRawResponse(xhr.response);
     }
  }

  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

/*The XMLHttpRequest object was created inside the getSuggestions function.
First, the renderRawResponse was used and searching a word in the search bar of the webpage returned an unformatted list of raw code.
This was then updated to renderResponse, which returned a formatted words that rhyme with the searched word.
*/
