 function onDOMLoad() {
      // Get the body element of the document
      var body = document.body;

      // Create a new paragraph element
      var paragraph = document.createElement('p');

      // Set the text content of the paragraph
      paragraph.textContent = "DOM load success";

      // Append the paragraph to the body
      body.appendChild(paragraph);
    }

    // Event listener for DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', onDOMLoad);