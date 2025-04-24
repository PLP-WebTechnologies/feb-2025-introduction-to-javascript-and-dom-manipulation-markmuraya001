// Change text content dynamically
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("text").textContent = "The text has been changed!";
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById("changeTextButton").addEventListener("mouseover", function() {
    document.getElementById("text").style.color = "blue";
  });
  
  // Add an element when the button is clicked
  document.getElementById("addElementButton").addEventListener("click", function() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a newly added element!";
    document.getElementById("newElementContainer").appendChild(newElement);
  });
  
  // Remove the last added element
  document.getElementById("removeElementButton").addEventListener("click", function() {
    const container = document.getElementById("newElementContainer");
    if (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
  });
  