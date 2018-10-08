// Information to reach API
const apiKey = 'df716751c6dc471684b26315c3a04c4f';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json', 'apikey': apiKey },
    body: data
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

/*Here I learned to update the boilerplate code that makes a POST request with fetch() and .then()
to shorted a URL using Rebrandly. I added variables to the shortenUrl code block and called the fetch function within.
I provided the endpoint and the object containing the necessary information. The request will happen in the next exercise.*/
