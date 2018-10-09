# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

When we click on the link to a webpage, the client (i.e. the web browser) temporarily retrieves information from the server, where the data is stored. To browse HTML documents, the client and server interact through the HTTP protocol.

## From start to finish how does that data reach you to be rendered in the browser?

The browser uses the Domain Name System (DNS) to extract an IP address for the site. The browser opens a Transmission Control Protocol (TCP) connection to the site over IP and requests the HTTP server (most commonly a GET or POST HTTP request). The server processes the client request message and replies to the web browser with an HTTP response message, that indicates whether or not the request succeeded. If successful, the requested resource (i.e. the HTML page) is rendered in the browser.

## What code is rendered in the browser?

The browser renders HTML, CSS, and images, with JavaScript client-side scripts.

## What is the server-side code’s main function?

The main function of the server-side code is to interact with stored information in databases or files to process data requests from the client. The server-side code facilitates the transfer of data from server to browser and renders the data in the browser.

## What is the client-side code’s main function?

The main function of the client-side code is to improve the appearance and behavior of a web page that runs in the browser.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

The client-side assets are rendered each time the client makes a request for the webpage from a server. The file is not saved by the client. Therefore, each time the webpage is visited, an instance of the client side assets is created, and the number of instances that exists at a given time equals the number of clients currently displaying the webpage.

## How many instances of the server-side code are available at any given time?

One instance of the server-side code is available at a given time. Multiple clients can access the same server-side code, which can produce a unique response to each client's request.

## What is runtime?

Runtime is the period during which a computer program is executing. It can also describe the executions that take place while a piece of code is running. JavaScript has some asynchronous capabilities that can improve runtime performance.

## How many instances of the the databases connected to the server application are created?

If I am understanding the question correctly, additional instances of the database connected to the server are not created (unless there is a need due to size). There needs to be one ultimate source of data (i.e. remaining inventory of a product in an online shop) that the server-side code can access during client requests.
