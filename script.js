 function dom() {
    // Code to execute when the DOM is fully loaded
    var message = document.createElement('p');
    message.textContent = 'DOM load success';
	   document.body.appendChild(message);
 }
document.addEventListener('DOMContentLoaded', dom);
	 