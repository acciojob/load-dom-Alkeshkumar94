 function onDOMLoad() {
      // Get the body element of the document
     
      // Create a new paragraph element
      
      var textNode = document.createTextNode('DOM load success');
	 document.body.appendChild(textNode);
    
     
    }
  // document.addEventListener('DOMContentLoaded', onDOMLoad());
    // Event listener for DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', onDOMLoad);