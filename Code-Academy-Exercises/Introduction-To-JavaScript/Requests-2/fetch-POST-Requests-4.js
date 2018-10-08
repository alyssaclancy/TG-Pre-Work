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
  }).then(response => {
    if (response.ok) {
        return response.json();
        } throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
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

/*In this exercise I learned how to make the POST request and handle the response. The request returns a
Promise which will be resolved or rejected. THe JSON has to get passed to another.then().*/
