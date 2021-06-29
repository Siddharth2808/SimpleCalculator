var now01=document.getElementById("c01");
var now11=document.getElementById("c11");
var now12=document.getElementById("c12");
var now13=document.getElementById("c13");
var now14=document.getElementById("c14");
var now21=document.getElementById("c21");
var now22=document.getElementById("c22");
var now23=document.getElementById("c23");
var now24=document.getElementById("c24");
var now31=document.getElementById("c31");
var now32=document.getElementById("c32");
var now33=document.getElementById("c33");
var now34=document.getElementById("c34");
var now41=document.getElementById("c41");
var now42=document.getElementById("c42");
var now43=document.getElementById("c43");
var now44=document.getElementById("c44");
var now51=document.getElementById("c51");
var now52=document.getElementById("c52");
var now53=document.getElementById("c53");
var symbol = "no";
now11.addEventListener("click", myFunction11);
function myFunction11() {
  now01.innerHTML = "";
  symbol="no";
}
now12.addEventListener("click",myfunction12);
function myfunction12(){
    now01.innerHTML=eval(parseInt(now01.innerHTML) * -1);
    symbol="no";
}
now13.addEventListener("click",myfunction13);
function myfunction13(){
    if(symbol==="no"){
     now01.innerHTML=((now01.innerHTML) + " % ");
    symbol = "%";}
}

now14.addEventListener("click",myfunction14);
function myfunction14(){
    if(symbol=="no"){
         now01.innerHTML=((now01.innerHTML) + " / ");
    symbol = "/";}
}


now21.addEventListener("click",myfunction21);
function myfunction21(){
    now01.innerHTML=((now01.innerHTML) + "7");
    symbol = "no";
}

now22.addEventListener("click",myfunction22);
function myfunction22(){
    now01.innerHTML=((now01.innerHTML) + "8");
    symbol = "no";
}

now23.addEventListener("click",myfunction23);
function myfunction23(){
    now01.innerHTML=((now01.innerHTML) + "9");
    symbol = "no";
}

now24.addEventListener("click",myfunction24);
function myfunction24(){
   if(symbol=="no"){
   now01.innerHTML=((now01.innerHTML) + " * ");
    symbol = "*";}
}

now31.addEventListener("click",myfunction31);
function myfunction31(){
    now01.innerHTML=((now01.innerHTML) + "4");
    symbol = "no";
}
now32.addEventListener("click",myfunction32);
function myfunction32(){
    now01.innerHTML=((now01.innerHTML) + "5");
    symbol = "no";
}

now33.addEventListener("click",myfunction33);
function myfunction33(){
    now01.innerHTML=((now01.innerHTML) + "6");
    symbol = "no";
}

now34.addEventListener("click",myfunction34);
function myfunction34(){
    if(symbol=="no"){ now01.innerHTML=((now01.innerHTML) + " - ");
    symbol = "-";}
}

now41.addEventListener("click",myfunction41);
function myfunction41(){
    now01.innerHTML=((now01.innerHTML) + "1");
    symbol = "no";
}
now42.addEventListener("click",myfunction42);
function myfunction42(){
    now01.innerHTML=((now01.innerHTML) + "2");
    symbol = "no";
}
now43.addEventListener("click",myfunction43);
function myfunction43(){
    now01.innerHTML=((now01.innerHTML) + "3");
    symbol = "no";
}
now44.addEventListener("click",myfunction44);
function myfunction44(){
    if(symbol=="no") {now01.innerHTML=((now01.innerHTML) + " + ");
    symbol = "+";}
}
now51.addEventListener("click",myfunction51);
function myfunction51(){
    now01.innerHTML=((now01.innerHTML) + "0");
    symbol = "no";
}
now52.addEventListener("click",myfunction52);
function myfunction52(){
    now01.innerHTML=((now01.innerHTML) + ".");
    symbol = "no";
}
now53.addEventListener("click",myfunction53);
function myfunction53(){
    if(symbol=="no"){ now01.innerHTML=eval(now01.innerHTML);
    symbol = "no";}
}




