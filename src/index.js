document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form#create-task-form")
  let input = document.querySelector("input#new-task-description")
  let list = document.querySelector("ul#tasks")

  input.addEventListener("keypress",function(){
    input.focus()
  })
  form.addEventListener("submit",function(e) {
    //creation of li
  let new_elment = document.createElement("li")
    new_elment.innerHTML = input.value
    list.appendChild(new_elment);
  new_elment.classList = (input.value).split(" ").join("_")

    //creation of span
    let delete_button =  document.createElement("span")
    delete_button.innerHTML = " x"
    delete_button.classList = (input.value).split(" ").join("_")
    new_elment.appendChild(delete_button)

    //adding event listener of each button
      delete_button.addEventListener("click",() =>{
          delete_button.parentElement.remove()
      })

    //reset everything to their previous state
    input.value = ""
    e.preventDefault()
   return false
  })

 
});
