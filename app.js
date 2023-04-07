function hello()
{
let id=document.getElementById("user_id").value;
let uname=document.getElementById("user_name").value;
let age=document.getElementById("user_age").value;
document.getElementById("display").innerHTML="Current Registration Details of user :";
document.getElementById("_id").innerHTML="user id is " +id;
document.getElementById("_name").innerHTML="user name is " +uname;
document.getElementById("_age").innerHTML="user age is " +age;
console.log(id);
console.log(uname);
console.log(age);
}

let button=document.getElementById("butt");
button.addEventListener("click",hello);