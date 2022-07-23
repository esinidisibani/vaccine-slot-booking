function saveData()
{
let name,email,phone,age,adhaar,address,date,password;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
phone=document.getElementById("phone").value;
age=document.getElementById("age").value;
adhaar=document.getElementById("adhaar").value;
address=document.getElementById("address").value;
date=document.getElementById("date").value;
password=document.getElementById("password").value;

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
localStorage.setItem("users",JSON.stringify(user_records));
}
showData();
}

function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
  user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
   {
      let addDiv=document.createElement('div');
      addDiv.className="row";
      addDiv.innerHTML='<div class="col-sm-1" style="padding: 10px;">'+user_records[i].name+'</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].email+'</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].phone+'</div><div class="col-sm-1" style="padding: 10px;">'+user_records[i].age+'</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].adhaar+'</div><div class="col-sm-1" style="padding: 10px;">'+user_records[i].address+'</div><div class="col-sm-1" style="padding: 10px;">'+user_records[i].date+'</div><div class="col-sm-1" style="padding: 10px;">'+user_records[i].password+'</div>';
      document.getElementById("showUsers").appendChild(addDiv);

    }
  }
 }
  
      