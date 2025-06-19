function cal(){
    var mname = document.getElementById("mname").value;
    var fname = document.getElementById("fname").value;
    var par=document.getElementById("res");

    var mes= document.getElementById("par");
 
     var res=Math.floor(Math.random()*100);

     if(res>80)
     {
        par.innerHTML ="Your result is "+res+" Very strong friendship"
        document.body.style.backgroundColor = "limegreen";
     }
     else if(res>45)
     {
        par.innerHTML ="Your result is "+res+" Good friendship"
        document.body.style.backgroundColor = "blue";
     }
     else if(res<45)
     {
        par.innerHTML ="Your result is "+res+" Get a new friend"
        document.body.style.backgroundColor = "red";
     }
     
}