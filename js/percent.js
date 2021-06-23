function porcentagem(){

    var group1 = document.formulario.group1;
    var group2 = document.formulario.group2;
    var group3 = document.formulario.group3;
    var group4 = document.formulario.group4;
    var group5 = document.formulario.group5;
    var group6 = document.formulario.group6;
    var group7 = document.formulario.group7;
    var group8 = document.formulario.group8;
    var group9 = document.formulario.group9;
    var group10 = document.formulario.group10;
    var group11 = document.formulario.group11;
    var group12 = document.formulario.group12;
    var group13 = document.formulario.group13;
    var group14 = document.formulario.group14;
    var group15 = document.formulario.group15;
    var group16 = document.formulario.group16;
    var group17 = document.formulario.group17;
    var group18 = document.formulario.group18;
    var group19 = document.formulario.group19;
    var group20 = document.formulario.group20;
    var resultado = "0";
    
    if(group1.value == "false"){
         resultado = 5;
    }
    
    if(group2.value == "false"){
        resultado = resultado + 5;
    }    
    
    if(group3.value == "false"){
         resultado = resultado + 5;
    }
    if(group4.value == "false"){
        resultado = resultado + 5;
    }
    if(group5.value == "false"){
        resultado = resultado + 5;
    }    
    
    if(group6.value == "false"){
         resultado = resultado + 5;
    }
    if(group7.value == "false"){
        resultado = resultado + 5;
    }
    if(group8.value == "false"){
        resultado = resultado + 5;
    }    
    
    if(group9.value == "false"){
         resultado = resultado + 5;
    }
    if(group10.value == "false"){
        resultado = resultado + 5;
    }
    if(group11.value == "false"){
        resultado = resultado + 5;
    }    
    
    if(group12.value == "false"){
         resultado = resultado + 5;
    }
    if(group13.value == "false"){
        resultado = resultado + 5;
    }

    if(group14.value == "false"){
        resultado = resultado + 5;
    }
    if(group15.value == "false"){
        resultado = resultado + 5;
    }    
    
    if(group16.value == "false"){
         resultado = resultado + 5;
    }
    if(group17.value == "false"){
        resultado = resultado + 5;
    }
    if(group18.value == "false"){
        resultado = resultado + 5;
    }    
    
    if(group19.value == "false"){
         resultado = resultado + 5;
    }
    if(group20.value == "false"){
        resultado = resultado + 5;
    }
        
    document.getElementById("p").innerHTML = "Você tem "+resultado+"% de chance de se contaminar e infectar alguem.";
}

