const calButton=document.getElementById("cal");
calButton.addEventListener("click", () => {
const n1=parseInt(document.getElementById("number1").value);
const n2=parseInt(document.getElementById("number2").value);
const op=document.getElementById("opt").value;
var i;
var ans="";
switch(op)
{
case 'even':
for(i=n1;i<=n2;i++)
{
if(i%2==0)
{
ans=ans+" "+i;
}
}
document.getElementById("output").innerHTML=ans;
break;
case 'odd':
for(i=n1;i<=n2;i++)
{
if(i%2!=0)
{
ans=ans+" "+i;
}
}
document.getElementById("output").innerHTML=ans;
break;
}
});
