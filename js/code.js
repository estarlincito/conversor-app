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
    //opciones a mostrar en valor 1 y 2.
    valor1.value="";
    valor2.value="";
    document.getElementById("USD").style.display="";
    document.getElementById("DOP").style.display="";
    document.getElementById("EUR").style.display="";
    document.getElementById("HTG").style.display="";
    
    document.getElementById("HR").style.display="none";
    document.getElementById("MIN").style.display="none";
    document.getElementById("SEG").style.display="none";
    document.getElementById("LB").style.display="none";
    document.getElementById("OZ").style.display="none";
    document.getElementById("T").style.display="none";
    document.getElementById("KM").style.display="none";
    document.getElementById("MILLA").style.display="none";
    document.getElementById("MTS").style.display="none";

    //opciones a mostrar en valor 2.
    document.getElementById("USD2").style.display="";
    document.getElementById("DOP2").style.display="";
    document.getElementById("EUR2").style.display="";
    document.getElementById("HTG2").style.display="";
    
    document.getElementById("HR2").style.display="none";
    document.getElementById("MIN2").style.display="none";
    document.getElementById("SEG2").style.display="none";
    document.getElementById("LB2").style.display="none";
    document.getElementById("OZ2").style.display="none";
    document.getElementById("T2").style.display="none";
    document.getElementById("KM2").style.display="none";
    document.getElementById("MILLA2").style.display="none";
    document.getElementById("MTS2").style.display="none";

}
else if (seleccion=="opt2"){
    //opciones valor1 de lenght.
    valor1.value="";
    valor2.value="";
    document.getElementById("USD").style.display="none";
    document.getElementById("DOP").style.display="none";
    document.getElementById("EUR").style.display="none";
    document.getElementById("HTG").style.display="none";
    
    document.getElementById("HR").style.display="";
    document.getElementById("MIN").style.display="";
    document.getElementById("SEG").style.display="";
    document.getElementById("LB").style.display="";
    document.getElementById("OZ").style.display="";
    document.getElementById("T").style.display="";
    document.getElementById("KM").style.display="";
    document.getElementById("MILLA").style.display="";
    document.getElementById("MTS").style.display="";

    //opciones valor2 de lenght
    document.getElementById("USD2").style.display="none";
    document.getElementById("DOP2").style.display="none";
    document.getElementById("EUR2").style.display="none";
    document.getElementById("HTG2").style.display="none";
    
    document.getElementById("HR2").style.display="";
    document.getElementById("MIN2").style.display="";
    document.getElementById("SEG2").style.display="";
    document.getElementById("LB2").style.display="";
    document.getElementById("OZ2").style.display="";
    document.getElementById("T2").style.display="";
    document.getElementById("KM2").style.display="";
    document.getElementById("MILLA2").style.display="";
    document.getElementById("MTS2").style.display="";
    }

}
function convertidor(){
    
    const valor1=document.getElementById("valor1").value;
    const valor2=document.getElementById("valor2").value;
    var selRango=document.getElementById("select1").value;
    var selRango2=document.getElementById("select2").value;
    //alert(valor1+" "+valor2+" "+selRango+" "+selRango2);

    //VALORES A MOSTRAR EN OPCIONES 2
    if(selRango===("KM")||selRango===("MILLA")||selRango===("MTS")){
        valor2.value="";
        //document.getElementById(select2).text="NONE";
        document.getElementById("HR2").style.display="none";
        document.getElementById("MIN2").style.display="none";
        document.getElementById("SEG2").style.display="none";
        document.getElementById("LB2").style.display="none";
        document.getElementById("OZ2").style.display="none";
        document.getElementById("T2").style.display="none";
        document.getElementById("KM2").style.display="";
        document.getElementById("MILLA2").style.display="";
        document.getElementById("MTS2").style.display="";
        
        }
    else if(selRango===("HR")||selRango===("MIN")||selRango===("SEG")){
        valor2.value="";
        //document.getElementById(select2).text="NONE";
        document.getElementById("HR2").style.display="";
        document.getElementById("MIN2").style.display="";
        document.getElementById("SEG2").style.display="";
        document.getElementById("LB2").style.display="none";
        document.getElementById("OZ2").style.display="none";
        document.getElementById("T2").style.display="none";
        document.getElementById("KM2").style.display="none";
        document.getElementById("MILLA2").style.display="none";
        document.getElementById("MTS2").style.display="none";
        }
    else if(selRango===("LB")||selRango===("OZ")||selRango===("T")){
        valor2.value="";
        //document.getElementById(select2).text="NONE";
        document.getElementById("HR2").style.display="none";
        document.getElementById("MIN2").style.display="none";
        document.getElementById("SEG2").style.display="none";
        document.getElementById("LB2").style.display="";
        document.getElementById("OZ2").style.display="";
        document.getElementById("T2").style.display="";
        document.getElementById("KM2").style.display="none";
        document.getElementById("MILLA2").style.display="none";
        document.getElementById("MTS2").style.display="none";
        }



        //OPCIONES DISTANCIA:
        if(selRango===("KM")){
        switch (selRango2){
            case "KM": document.getElementById ("valor2").value=valor1;
            break;
            case "MILLA": document.getElementById ("valor2").value=valor1*0.621;
            break;
            case "MTS": document.getElementById("valor2").value=valor1*1000;
            break;
            }
        }
        else  if(selRango===("MILLA")){
        switch (selRango2){
            case "KM": document.getElementById ("valor2").value=valor1/0.621;
            break;
            case "MILLA": document.getElementById ("valor2").value=valor1;
            break;
            case "MTS": document.getElementById("valor2").value=valor1*1609.34;
            break;
            }
        }
        else  if(selRango===("MTS")){
            switch (selRango2){
                case "KM": document.getElementById ("valor2").value=valor1/1000;
                break;
                case "MILLA": document.getElementById ("valor2").value=valor1/1609.34;
                break;
                case "MTS": document.getElementById("valor2").value=valor1;
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
                case "T": document.getElementById("valor2").value=valor1/2204.62;
                break;
                }
            }
            else  if(selRango===("ONZ")){
            switch (selRango2){
                case "LIB": document.getElementById ("valor2").value=valor1/16;
                break;
                case "ONZ": document.getElementById ("valor2").value=valor1;
                break;
                case "T": document.getElementById("valor2").value=valor1/35274;
                break;
                }
            }
            else  if(selRango===("T")){
                switch (selRango2){
                    case "LIB": document.getElementById ("valor2").value=valor1*2204.62;
                    break;
                    case "ONZ": document.getElementById ("valor2").value=valor1*35274;
                    break;
                    case "T": document.getElementById("valor2").value=valor1;
                    break;
                    }
                }
  
}
//funcion invertir valores.
function invertir1 (){ alert ("coral");
    //optener valores
   const valor1 =document.getElementById("valor2").value;
    const valor2 =document.getElementById("valor1").value;
    var selRango=document.getElementById("select2").value;
    var selRango2=document.getElementById("select1").value;
    //mostrar valores
    document.getElementById("selRango").value=selRango;
document.getElementById("selRango2").value=selRango2;
document.getElementById("valor1").value=valor1;
document.getElementById("valor2").value=valor2;

}