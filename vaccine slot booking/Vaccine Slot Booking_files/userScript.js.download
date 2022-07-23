function saveData()
{
//retrive data
var name = document.getElementById("name").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;
var age=document.getElementById("age").value;
var adhaar=document.getElementById("adhaar").value;
var address=document.getElementById("address").value;
var date=document.getElementById("date").value;
var password=document.getElementById("password").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
    user_records.push({
        "name":name,
        "email":email,
        "phone":phone,
        "age":age,
        "adhaar":adhaar,
        "address":address,
        "date":date,
        "password":password
      })
      //Store data 
      localStorage.setItem("users",JSON.stringify(user_records));
}



/*if (a == name && b == email && c == phone && d == age && e == adhaar && f == address && g == date ){
    alert("Login successful !");
} else {
     alert("Invalid details !");
}*/

}