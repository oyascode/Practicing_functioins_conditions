
Explain EventListeners with examples

# EventListeners  
Imagine you employed a gatekeeper. Here are some of his responsibilities:  


1. To be attentive at the gate  
2. Confirm car honk (event) and ultimately,   
3. Open the gate (act, handle it).  

Therefore an eventListener is a gatekeeper that waits for an event to occur (in this case a car honk) in order to carry out a task(opening the gate respectively). Examples of events are when a user clicks a button, mouse-over an element or any keyboard event.  



It is noteworthy that the same gatekeeper listens and open. In JavaScript, eventListers are the same as eventHandlers. They listen for say, when a button is clicked and then perform a specific function to handle the event. For example:  


// Get a reference to a button element  
const btn = document.querySelector('.btn')  


// Use DOM API addEventListener to append an event and a handling function to the btn element  
btn.addEventListener('click', sayHello);  

function sayHello() {  
  console.log('Hello World!');  
}  

"Hello World displays when a user clicks the button."



