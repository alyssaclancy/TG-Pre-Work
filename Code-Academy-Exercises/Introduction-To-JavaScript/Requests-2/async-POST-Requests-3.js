// information to reach API
const apiKey = 'df716751c6dc471684b26315c3a04c4f';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: { 'Content-type': 'application/json', 'apikey': apiKey }
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
}

};

// Code goes here

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

/*The boilerplate code for the POST request was incorprated into the logic to make a real request.
To recap, async is a keyword that is used to create functions that will return promises.
await is a keyword that is used to tell a program to continue moving through the message queue while a promise resolves.
It is beneficial to use AJAX to asynchronously request data from APIs so that elements on the page can continue loading even if one takes longer.
*/
