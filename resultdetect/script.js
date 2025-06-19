function cal(){
   var mname = document.getElementById("mname").value;
   var fname = document.getElementById("fname").value;
   var par=document.getElementById("res");

   var mes= document.getElementById("par");

    var res=Math.floor(Math.random()*100);

    if(res>80)
    {
       par.innerHTML ="Your result is "+res+" distinction"
       document.body.style.backgroundColor = "limegreen";
    }
    else if(res>45)
    {
       par.innerHTML ="Your result is "+res+" pass"
       document.body.style.backgroundColor = "blue";
    }
    else if(res<45)
    {
       par.innerHTML ="Your result is "+res+" fail"
       document.body.style.backgroundColor = "red";
    }
    
}