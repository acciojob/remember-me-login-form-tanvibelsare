//your JS code here. If required.
let username=document.getElementById("username");
let password=document.getElementById("password");
let checkbox=document.getElementById("checkbox");
let btn=document.getElementById("submit");
let exist=document.getElementById("existing");
btn.addEventListner("click",(event)=>{
	
	event.preventDefault()
	console.log("hii")
	if(checkbox.checked){
		localStorage.setItem("Username",username.value)
		localStorage.setItem("Password",password.value)
		
	}else{
		localStorage.removeItem("Username",username.value)
		localStorage.removeItem("Passsword",password.value)
	}
	alert("Logged in as"+username.value)
})
 if (localStorage.getItem("Username")) {
      var existingUserBtn = document.createElement("button");
      existingUserBtn.id = "existing";
      existingUserBtn.textContent = "Login as existing user";
      document.body.appendChild(existingUserBtn);
      existingUserBtn.addEventListener("click", function() {
        var savedUsername = localStorage.getItem("username");
        alert("Logged in as " + savedUsername);
      });
    }
// exist.addEventListener("click",()=>{
// 	// if(username.value!=none||password.value!=nne){o
// 		alert("Logged in as"+username.value)
// 	// }
