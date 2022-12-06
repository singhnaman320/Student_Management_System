

let arrfromLS= JSON.parse(localStorage.getItem("AdmMan")) || [];


document.querySelector("form").addEventListener("submit", myLogin);
function myLogin(event){
event.preventDefault();



let loginObj={ loginUser: document.querySelector("#user").value,
               loginPass: document.querySelector("#pass").value };



let flag= false;
for(let i=0;i<arrfromLS.length;i++){
  if(arrfromLS[i].personUser==loginObj.loginUser && arrfromLS[i].personPass==loginObj.loginPass){
  flag=true;
  break;
  }
}
if(flag==true){
  alert("Login Successfull");
  localStorage.setItem("setsystem","offline");
  window.location.href="./manage.html"
}else{
  alert("Wrong Credentials");
  window.location.href="./Adminsign.html";
}

}