// funcion de convertir 

function convertirDop(){
    // aqui llamo a los id de los dos selecc que tenemos en el currency 
    // los id se llaman selec1 y el select 2 
    // de igual forma los valores los convertir a float

    var valorSelec1 = parseFloat(document.getElementById("select1").value);
    var valorSelec2 = parseFloat(document.getElementById("select2").value);

    // aqui estan los valores del dolar a peso dominicano DOP , A Euro y a HTG
    var dolarPeso = 56.84;
    var dolarEuro = 0.85;
    var dolarHtg = 99.65;
    resultado = 0;

    // convesion de dolares a otras monedas

    // dolar a peso
    if (valorSelec1 == 1 && valorSelec2 == 1){
        resultado = valorSelec1 * dolarPeso;
        console.log("El resultado es; " + resultado);
    } 

    // dolar a euro    
    else if (valorSelec1 == 1 && valorSelec2 == 2){
        resultado = valorSelec1 * dolarEuro;
        console.log("El resultado es; " + resultado);
        
    }

    //dolar a htg creole    
    else if(valorSelec1 == 1 && valorSelec2 == 3){
        resultado = valorSelec1 * dolarHtg; 
        console.log("El resultado es; " + resultado);
    }

    else if (valorSelec1 == 1 && valorSelec2 == 4)
    resultado = valorSelec1;
    console.log("El resultado es; " + resultado);

    
}

//funciones Hawel

function optConversion(){
var seleccion = document.getElementById("selConver").value; //variable para saber cual medida de convercion esta selecionada.

    
if (seleccion=="opt1"){
   
    valor1.value="";
    valor2.value="";
    selRango[0].value="KM";
    selRango[0].text="KM";
    selRango2[0].value="KM";
    selRango2[0].text="KM";
    selRango[1].value="MILLA";
    selRango[1].text="MILLA";
    selRango2[1].value="MILLA";
    selRango2[1].text="MILLA";
    selRango[2].value="METRO";
    selRango[2].text="METRO";
    selRango2[2].value="METRO";
    selRango2[2].text="METRO";
}
else if (seleccion=="opt2"){
    
    valor1.value="";
    valor2.value="";
    selRango[0].value="HR";
    selRango[0].text="HORAS";
    selRango2[0].value="HR";
    selRango2[0].text="HORAS";
    selRango[1].value="MIN";
    selRango[1].text="MIN";
    selRango2[1].value="MIN";
    selRango2[1].text="MIN";
    selRango[2].value="SEG";
    selRango[2].text="SEG";
    selRango2[2].value="SEG";
    selRango2[2].text="SEG";
}
else if (seleccion==="opt3"){

    valor1.value="";
    valor2.value="";
    selRango[0].value="LIB";
    selRango[0].text="LIBRA";
    selRango2[0].value="LIB";
    selRango2[0].text="LIBRA";
    selRango[1].value="ONZ";
    selRango[1].text="ONZA";
    selRango2[1].value="ONZ";
    selRango2[1].text="ONZA";
    selRango[2].value="TONE";
    selRango[2].text="TONE";
    selRango2[2].value="TONE";
    selRango2[2].text="TONE";
}
}
function convertidor(){
    
    const valor1=document.getElementById("valor1").value;
    const valor2=document.getElementById("valor2").value;
    var selRango=document.getElementById("selRango").value;
    var selRango2=document.getElementById("selRango2").value;
    //alert(valor1+" "+valor2+" "+selRango+" "+selRango2);

    //OPCIONES LONGUITUD:
    if(selRango===("KM")){
        switch (selRango2){
            case "KM": document.getElementById ("valor2").value=valor1;
            break;
            case "MILLA": document.getElementById ("valor2").value=valor1*0.621;
            break;
            case "METRO": document.getElementById("valor2").value=valor1*1000;
            break;
            }
        }
        else  if(selRango===("MILLA")){
        switch (selRango2){
            case "KM": document.getElementById ("valor2").value=valor1/0.621;
            break;
            case "MILLA": document.getElementById ("valor2").value=valor1;
            break;
            case "METRO": document.getElementById("valor2").value=valor1*1609.34;
            break;
            }
        }
        else  if(selRango===("METRO")){
            switch (selRango2){
                case "KM": document.getElementById ("valor2").value=valor1/1000;
                break;
                case "MILLA": document.getElementById ("valor2").value=valor1/1609.34;
                break;
                case "METRO": document.getElementById("valor2").value=valor1;
                break;
                }
            }


    //Opciones TIEMPO
    if(selRango===("HR")){
    switch (selRango2){
        case "HR": document.getElementById ("valor2").value=valor1;
        break;
        case "MIN": document.getElementById ("valor2").value=valor1*60;
        break;
        case "SEG": document.getElementById("valor2").value=valor1*3600;
        break;
        }
    }
    else  if(selRango===("MIN")){
    switch (selRango2){
        case "HR": document.getElementById ("valor2").value=valor1/60;
        break;
        case "MIN": document.getElementById ("valor2").value=valor1;
        break;
        case "SEG": document.getElementById("valor2").value=valor1*60;
        break;
        }
    }
    else  if(selRango===("SEG")){
        switch (selRango2){
            case "HR": document.getElementById ("valor2").value=valor1/3600;
            break;
            case "MIN": document.getElementById ("valor2").value=valor1/60;
            break;
            case "SEG": document.getElementById("valor2").value=valor1;
            break;
            }
        }
        //OPCIONES PESO
        if(selRango===("LIB")){
            switch (selRango2){
                case "LIB": document.getElementById ("valor2").value=valor1;
                break;
                case "ONZ": document.getElementById ("valor2").value=valor1*16;
                break;
                case "TONE": document.getElementById("valor2").value=valor1/2204.62;
                break;
                }
            }
            else  if(selRango===("ONZ")){
            switch (selRango2){
                case "LIB": document.getElementById ("valor2").value=valor1/16;
                break;
                case "ONZ": document.getElementById ("valor2").value=valor1;
                break;
                case "TONE": document.getElementById("valor2").value=valor1/35274;
                break;
                }
            }
            else  if(selRango===("TONE")){
                switch (selRango2){
                    case "LIB": document.getElementById ("valor2").value=valor1*2204.62;
                    break;
                    case "ONZ": document.getElementById ("valor2").value=valor1*35274;
                    break;
                    case "TONE": document.getElementById("valor2").value=valor1;
                    break;
                    }
                }

  
  
}
