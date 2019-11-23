document.addEventListener("DOMContentLoaded", () => {
  let myButton = document.querySelectorAll("form input")[1];

  var form = document.getElementById("create-task-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    myInputElement = document.querySelector("#new-task-description");

    var shitVarmi = controlMessage(myInputElement.value);
    if (!shitVarmi) {
      listAdder(myInputElement.value);
      clearInput(myInputElement);
    } else alert("shit giremezsin");
  });

  function controlMessage(messageParam) {
    // monitor specific keywords
    if (messageParam == "shit") {
      return true;
    } else {
      return false;
    }
  }

  function listAdder(givenListName) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(givenListName));
    ul.appendChild(li);
  }

  function clearInput(inputElement) {
    inputElement.value = "";
  }
});