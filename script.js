 function onDOMLoad() {
	  var body = document.body;

      // Clear any existing content in the body
      body.innerHTML = '';
      var textNode = document.createTextNode('DOM load success');
	 body.appendChild(textNode);
    }
 
    document.addEventListener('DOMContentLoaded', onDOMLoad());