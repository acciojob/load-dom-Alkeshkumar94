 function onDOMLoad() {
      var textNode = document.createTextNode('DOM load success');
	 document.body.appendChild(textNode);
    }
 
    document.addEventListener('DOMContentLoaded', onDOMLoad());