//your JS code here. If required.
let username=document.getElementById("username");
let password=document.getElementById("password");
let checkbox=document.getElementById("checkbox");
let btn=document.getElementById("submit");
let exist=document.getElementById("existing");
btn.addEventListner("click",(event)=>{
	
	event.preventDefault()
	if(checkbox.checked =="true"){
		localStorage.setItem("Username",username.value)
		localStorage.setItem("Password",password.value)
		alert("Logged in as"+username.value)
	}else{
		localStorage.removeItem("Username",username.value)
		localStorage.removeItem("Passsword",password.value)
	}
})
exist.addEventListener("click",()=>{
	// if(username.value!=none||password.value!=nne){o
		alert("Logged in as"+username.value)
	// }
})