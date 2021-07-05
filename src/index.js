document.addEventListener("DOMContentLoaded", () => {
  addListener()
});
function getFormData(){
  return{
    description: document.getElementById("new-task-description").value,
    username: document.getElementById("new-task-username").value
  }
  // const description = document.getElementById("new-task-description").value
}
function postHtml(post){
  return `
  <div id="list">
  <ul id="tasks">
    <p>${post.description}</p>
    <P>${post.username}</P>
  </ul>
</div>

`
}

const attachPost = function(post) {
  document.querySelector("#tasks").innerHTML += post
 

}
const clearForm = () => {
  document.getElementById("new-task-description").value = ""
  document.getElementById("new-task-username").value = ""
}
function addListener() {
    const form = document.querySelector("#create-task-form")
    form.addEventListener("submit", function(event){
      event.preventDefault()
  
      const post = getFormData()

      const htmlPost = postHtml(post)

      attachPost(htmlPost)

      clearForm()



  })
}