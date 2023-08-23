//local storage =database (R1)
const exp1 =document.getElementById("exp1")
const from1 =document.getElementById("date1")
const to1 =document.getElementById("date2")
const exp2 =document.getElementById("exp2")
const from2 =document.getElementById("date3")
const to2 =document.getElementById("date4")
const exp3 =document.getElementById("exp3")
const from3 =document.getElementById("date5")
const to3 =document.getElementById("date6")
const emp=document.getElementById("exp1")
const dep=document.getElementById("exp1")
const join=document.getElementById("date7")

const btnN=document.getElementById("btnN")

btnN.onclick = function(){

    localStorage.setItem('exp_1',exp1.value)
    localStorage.setItem('from_1',from1.value)
    localStorage.setItem('to_1',to1.value)
    
    localStorage.setItem('exp_2',exp2.value)
    localStorage.setItem('from_2',from2.value)
    localStorage.setItem('to_2',to2.value)

    localStorage.setItem('exp_3',exp3.value)
    localStorage.setItem('from_3',from3.value)
    localStorage.setItem('to_3',to3.value)
    localStorage.setItem('emp_Id',emp.value)
    localStorage.setItem('dep',dep.value)
    localStorage.setItem('joining',join.value)





    console.log(localStorage.getItem("exp_1"))
    console.log(localStorage.getItem("from_1"))
    console.log(localStorage.getItem("to_1"))

    console.log(localStorage.getItem("exp_2"))
    console.log(localStorage.getItem("from_2"))
    console.log(localStorage.getItem("to_2"))

    console.log(localStorage.getItem("exp_3"))
    console.log(localStorage.getItem("from_3"))
    console.log(localStorage.getItem("to_3"))
    console.log(localStorage.getItem("emp_Id"))
    console.log(localStorage.getItem("dep"))
    console.log(localStorage.getItem("joining"))
    
    

 
}

/*function compareDate()
{

    var date1=new Date(document.getElementById("date1").value)
    var date2=new Date(document.getElementById("date1").value)
    const btnN=document.getElementById("btnN")
    var result;
    if(date1<date2){
        result=date1-date2;
    }
    else{
        result=date2-date1;
    }

  
}
*/
/*btnN.onclick = function(){
    var date1=document.getElementById("exp1").value
    var date2=document.getElementById("exp2").value
    var result;
   //var date1
   //var date2=5;
    result=date1-date2;

    console.log(result)
}
*/


function calc(){
    var date1=document.getElementById("date1").value
    var date2=document.getElementById("date2").value
    var result=Math.abs(date1-date2)
    document.getElementById("output").innerHTML=result



}


