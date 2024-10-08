const calButton=document.getElementById("cal");
calButton.addEventListener("click",() => {

const n1=parseInt(document.getElementById("number1").value);
const n2=parseInt(document.getElementById("number2").value);
const operator=document.getElementById("opt").value;
switch(operator)
{
case '+': 
document.getElementById("output").innerHTML=n1+n2;
break;

case '-': 
document.getElementById("output").innerHTML=n1-n2;
break;

case '*': 
document.getElementById("output").innerHTML=n1*n2;
break;
}
});


