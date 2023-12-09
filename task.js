var a = 10; b=20;

function sum(){
    c = parseInt(a)+parseInt(b);
    alert(c);
    return c;
}
function submit(){
   // alert("Hello");
    a = document.getElementById("ainput").value;
    b = document.getElementById("binput").value;
   // alert(a+" : "+b);
    c = parseInt(a)+parseInt(b);
    document.getElementById("answer").innerHTML = c;

}

function sub(){
     e = document.getElementById("einput").value;
     f = document.getElementById("finput").value;
     d = parseInt(e)-parseInt(f);
     document.getElementById("answer1").innerHTML = d;
 
 }

 function multi(){
     a1 = document.getElementById("a1input").value;
     b1 = document.getElementById("b1input").value;
     c1 = parseInt(a1)*parseInt(b1);
     document.getElementById("answer2").innerHTML = c1;
 
 }

 function div(){
    a2 = document.getElementById("a2input").value;
    b2 = document.getElementById("b2input").value;
    c2 = parseInt(a2)/parseInt(b2);
    document.getElementById("answer3").innerHTML = c2;

}
function mod(){
    a3 = document.getElementById("a3input").value;
    b3 = document.getElementById("b3input").value;
    c3 = parseInt(a3)%parseInt(b3);
    document.getElementById("answer4").innerHTML = c3;

}