 function onDOMLoad() {
      // Get the body element of the document
     
      // Create a new paragraph element
      var paragraph = document.createElement('p');

      // Set the text content of the paragraph
      paragraph.textContent = "DOM load success";

      // Append the paragraph to the body
     
    }

    // Event listener for DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', onDOMLoad);