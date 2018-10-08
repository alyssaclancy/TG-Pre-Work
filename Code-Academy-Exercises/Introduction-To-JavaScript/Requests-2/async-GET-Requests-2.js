const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint')
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
      throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
};

/*Above is the boilerplate code for a GET request using async and await.
await allows a program to run while waiting for a promise to resolve. It can only be used in async functions.
try...catch statements push code in the try block and in the event of an error/exception, the catch statement will run.
*/
