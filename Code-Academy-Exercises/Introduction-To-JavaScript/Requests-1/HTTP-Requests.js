console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');


/*JavaScript is an asynchronous language that has non-blocking properties. It uses an event loop to handle asynchronous function calls,
when function calls are made they are aded to a stack, waiting for servers to respond. While they wait they get sent to a separate queue and once the stack has cleared, the functions in the queue are executed.
Developers consider this while deciding when to call functions and how to handle asynchronous events to create a smoother browsing experience.
For example, text can load while a large image continues to render.
Asynchronous JavaScriptand XML is also called AJAX.
setTimeout() passes a function call to the queue, the first argument is a callback and the second is the number of milliseconds the program must wait before the callback can be run.
It was run with the time set both to 2500 ms and 0.*/
