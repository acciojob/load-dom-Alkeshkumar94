 function dom() {
    // Code to execute when the DOM is fully loaded
	  var body = document.body;
	  if (body.childElementCount === 0) {
    var message = document.createElement('p');
    message.textContent = 'DOM load success';
	   body.appendChild(message);
	  }
 }

document.addEventListener('DOMContentLoaded', dom);
	 