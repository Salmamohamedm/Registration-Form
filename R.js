//local storage = database(R)
const firstname =document.getElementById("firstname")
const lastname =document.getElementById("lastname")
const birthdate =document.getElementById("birthdate")
const personalID =document.getElementById("personal")
const degree =document.getElementById("degree")
const gender =document.getElementById("gend")
const phone =document.getElementById("phone")
const exp =document.getElementById("exp1")
const btnN=document.getElementById("btnN")

btnN.onclick = function(){
  /*const key= firstname.value
  const value= firstname.value
  console.log(key)
  console.log(value)
  */
 localStorage.setItem('firstName',firstname.value)
 localStorage.setItem('lastName',lastname.value)
 localStorage.setItem('birthDate',birthdate.value)
 localStorage.setItem('personal ID',personalID.value)
 localStorage.setItem('degree',degree.value)
 localStorage.setItem('gender',gender.value)
 localStorage.setItem('phone',phone.value)
 localStorage.setItem('exp',exp.value)
 


 console.log(localStorage.getItem("firstName"))
 console.log(localStorage.getItem("lastName"))
 console.log(localStorage.getItem("birthDate"))
 console.log(localStorage.getItem("personal ID"))
 console.log(localStorage.getItem("degree"))
 console.log(localStorage.getItem("gender"))
 console.log(localStorage.getItem("phone"))
 console.log(localStorage.getItem("exp"))


 
 
}


