//declarando var by Estarlin
    var form = document.getElementById('form');
    var form__form = document.getElementById('form__form');
    var valor2 = document.getElementById('valor2'); //form__input
    var select2 = document.getElementById('select2'); //form__select
    var form__button_bi = document.getElementById('form__button_bi');
    var form__button_bi2 = document.getElementById('form__button_bi2');
    var favorito = document.getElementById('favorito');
    var ver__favotitos = document.getElementById('ver__favotitos');
    var g__favotitos = document.getElementById('g__favotitos');


// creacion de las funciones para que estas realicen sus funciones

//tengo el id del primer input1 que se llama asi 
// tambien  le cree un id al select de arriba select1

function convertidorMonedas(){

    // extrajendo los valores con el id y value
    var valorInput1 = document.getElementById("valor1").value;
    var valorInput2 = document.getElementById("valor2").value;
    

    // llamando a los dos id de html 

    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;


    

    

   

    // primera conversion dolar a a las demas monedas 
    if(select1 == "1" ){
        
        switch(select2)
        {
            case "1":
                document.getElementById("valor2").value =  valorInput1;
                break;

            case "2":
                document.getElementById("valor2").value =  valorInput1 * 56.61;
                break;
            case "3":
                document.getElementById("valor2").value = valorInput1 * 0.85;
                break;
            case "4":
                document.getElementById("valor2").value = valorInput1 * 97.00;
                break;
                 
        }  
        
               

    // conversion de pesos a las demas moneads 
       
    }else if(select1 == "2"){
        switch(select2){
            case "1":
                document.getElementById("valor2").value = valorInput1 * 0.018;
                break;
            case "2":
                document.getElementById("valor2").value = valorInput1;
                break;
            case "3":
                document.getElementById("valor2").value = valorInput1 * 0.015;
                break;
            case "4":
                document.getElementById("valor2").value = valorInput1 * 1.71;
                break;                         

                
        }

        // conversion de euro a las demas moneadas
    }
    else if(select1 == "3"){
        switch(select2){
            case "1":
                document.getElementById("valor2").value = valorInput1 * 1.18;
                break;
            case "2":
                document.getElementById("valor2").value = valorInput1 * 66.86;
                break;
            case "3":
                document.getElementById("valor2").value = valorInput1 ;
                break;
            case "4":
                document.getElementById("valor2").value = valorInput1 * 114.47;
                break;  

        }

        

    }

    // conversion de htg a los demas monedas
    
    else if(select1 == "4"){
        switch(select2){
            case "1":
                document.getElementById("valor2").value = valorInput1 * 0.010;
                break;
            case "2":
                document.getElementById("valor2").value = valorInput1 * 0.57;
                break;
            case "3":
                document.getElementById("valor2").value = valorInput1 *0.0086 ;
                break;
            case "4":
                document.getElementById("valor2").value = valorInput1;
                break; 
                
            }     

        } 


}    

    



//     // dolar a euro
//     else if(select1 ==1 && select2 == 2){
        
//     }

//     // dolar a htg 
//     else if(select1 ==1 && select2 == 3){
        
//     }

//     // dolar a dolar 
//     else if(select1 ==1 && select2 == 4){
//         resultado = valorInput1 ;
//     }



    
//       // peso a peso
//       else if(select1 == 2 && select2 == 1){
//         resultado = valorInput1  ;
//     }



//      // peso a euro
//      else if(select1 == 2 && select2 == 2){
//         resultado = valorInput1 *  ;
//     }

//     // peso a htg
//     else if(select1 == 2 && select2 == 3){
//         resultado = valorInput1 *  ;
//     }

//     // peso a dolar
//     else if(select1 == 2 && select2 == 3){
//         resultado = valorInput1 * 0.018 ;
//     }

//     // conversion de Euro 

    
//     else if(select1 == 3 && select2 == 1){
//         resultado = valorInput1 * 66.81 ;
//     }

//     // DE EURO A EURO
   
//     else if(select1 == 3 && select2 == 2){
//         resultado = valorInput1  ;
//     }

//     // EURO A HTG 

//     else if(select1 == 3 && select2 == 3){
//         resultado = valorInput1 * 114.47 ;
//     }

//     //EURO A DOLAR 
    

//     else if(select1 == 3 && select2 == 3){
//         resultado = valorInput1 *  ;
//     }

//     // DE HTG A PESO 

//     else if(select1 == 4 && select2 == 1){
//         resultado = valorInput1 * 0.57 ;
//     }

//     // htg a euro 
//     else if(select1 == 4 && select2 == 2){
//         resultado = valorInput1 * 0.0086 ;
//     }

//     // htg a htg

//     else if(select1 == 4 && select2 == 2){
//         resultado = valorInput1  ;
//     }

//     // htg a dolar

    

//     else if(select1 == 4 && select2 == 2){
//         resultado = valorInput1 * 0.010 ;
//     }

    
    
// }





// funcion de convertir 

// function convertirDop(){
//     // aqui llamo a los id de los dos selecc que tenemos en el currency 
//     // los id se llaman selec1 y el select 2 
//     // de igual forma los valores los convertir a float

//     var valorSelec1 = parseFloat(document.getElementById("select1").value);
//     var valorSelec2 = parseFloat(document.getElementById("select2").value);

//     // aqui estan los valores del dolar a peso dominicano DOP , A Euro y a HTG
//     var dolarPeso = 56.84;
//     var dolarEuro = 0.85;
//     var dolarHtg = 99.65;
//     resultado = 0;

//     // convesion de dolares a otras monedas

//     // dolar a peso
//     if (valorSelec1 == 1 && valorSelec2 == 1){
//         resultado = valorSelec1 * dolarPeso;
//         console.log("El resultado es; " + resultado);
//     } 

//     // dolar a euro    
//     else if (valorSelec1 == 1 && valorSelec2 == 2){
//         resultado = valorSelec1 * dolarEuro;
//         console.log("El resultado es; " + resultado);
        
//     }

//     //dolar a htg creole    
//     else if(valorSelec1 == 1 && valorSelec2 == 3){
//         resultado = valorSelec1 * dolarHtg; 
//         console.log("El resultado es; " + resultado);
//     }

//     else if (valorSelec1 == 1 && valorSelec2 == 4)
//     resultado = valorSelec1;
//     console.log("El resultado es; " + resultado);

    
// }

//funciones Hawel

function optConversion(){
var seleccion = document.getElementById("selConver").value; //variable para saber cual medida de convercion esta selecionada.

    
if (seleccion=="opt1"){
//eliminando los stylos de length by Estarlin
    form.classList.remove('form__Lenght');
    favorito.classList.remove('form__Lenght');
    form__form.classList.remove('form__form3');
    valor2.classList.remove('form__input3'); //form__input
    select2.classList.remove('form__select4'); //form__select
    form__button_bi.classList.remove('form__button_bi2');
    form__button_bi2.classList.remove('form__button_bi2');  

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
    document.getElementById("ONZ").style.display="none";
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
    document.getElementById("ONZ2").style.display="none";
    document.getElementById("T2").style.display="none";
    document.getElementById("KM2").style.display="none";
    document.getElementById("MILLA2").style.display="none";
    document.getElementById("MTS2").style.display="none";

}
else if (seleccion=="opt2"){
//aplicando los stylos de length by Estarlin
    form.classList.add('form__Lenght');
    favorito.classList.add('form__Lenght');
    form__form.classList.add('form__form3');
    valor2.classList.add('form__input3'); //form__input
    select2.classList.add('form__select4'); //form__select
    form__button_bi.classList.add('form__button_bi2');
    form__button_bi2.classList.add('form__button_bi2');  

    

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
    document.getElementById("ONZ").style.display="";
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
    document.getElementById("ONZ2").style.display="";
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
     //variable para poner none si selec2 no esta ene l rango de selec1
    
    //alert(valor1+" "+valor2+" "+selRango+" "+selRango2);

    //VALORES A MOSTRAR EN OPCIONES 2
    if(selRango===("KM")||selRango===("MILLA")||selRango===("MTS")){
        //document.getElementById(select2).text="NONE";
        document.getElementById("HR2").style.display="none";
        document.getElementById("MIN2").style.display="none";
        document.getElementById("SEG2").style.display="none";
        document.getElementById("LB2").style.display="none";
        document.getElementById("ONZ2").style.display="none";
        document.getElementById("T2").style.display="none";
        document.getElementById("KM2").style.display="";
        document.getElementById("MILLA2").style.display="";
        document.getElementById("MTS2").style.display="";
        
        
        }
    else if(selRango===("HR")||selRango===("MIN")||selRango===("SEG")){
        //document.getElementById("select2").value=document.getElementById(select2[0].value);
        //document.getElementById(select2).text="NONE";
        document.getElementById("HR2").style.display="";
        document.getElementById("MIN2").style.display="";
        document.getElementById("SEG2").style.display="";
        document.getElementById("LB2").style.display="none";
        document.getElementById("ONZ2").style.display="none";
        document.getElementById("T2").style.display="none";
        document.getElementById("KM2").style.display="none";
        document.getElementById("MILLA2").style.display="none";
        document.getElementById("MTS2").style.display="none";
        
        }
    else if(selRango===("LB")||selRango===("ONZ")||selRango===("T")){
        //document.getElementById("select2").value=document.getElementById(select2[0].value);
        //document.getElementById(select2).text="NONE";
        document.getElementById("HR2").style.display="none";
        document.getElementById("MIN2").style.display="none";
        document.getElementById("SEG2").style.display="none";
        document.getElementById("LB2").style.display="";
        document.getElementById("ONZ2").style.display="";
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
            default: 
                document.getElementById("valor2").value=valor1*0;
                var hawel=document.getElementById("select2").value="0";
                document.getElementById(select2).value=hawel;
                
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
            default: 
                document.getElementById("valor2").value=valor1*0;
                var hawel=document.getElementById("select2").value="0";
                document.getElementById(select2).value=hawel;
                
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
                default:
                    document.getElementById("valor2").value=valor1*0; 
                    var hawel=document.getElementById("select2").value="0"; 
                    document.getElementById(select2).value=hawel;
                    
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
        default: 
        document.getElementById("valor2").value=valor1*0;
                    var hawel=document.getElementById("select2").value="0"; 
                    document.getElementById(select2).value=hawel;
                    
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
        default: 
        document.getElementById("valor2").value=valor1*0;
                    var hawel=document.getElementById("select2").value="0"; 
                    document.getElementById(select2).value=hawel;
                    
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
            default: 
            document.getElementById("valor2").value=valor1*0;
                    var hawel=document.getElementById("select2").value="0"; 
                    document.getElementById(select2).value=hawel;
                    
            }
        }
        //OPCIONES PESO
        if(selRango===("LB")){
            switch (selRango2){
                case "LB": document.getElementById ("valor2").value=valor1;
                break;
                case "ONZ": document.getElementById ("valor2").value=valor1*16;
                break;
                case "T": document.getElementById("valor2").value=valor1/2204.62;
                break;
                default: 
                document.getElementById("valor2").value=valor1*0;
                    var hawel=document.getElementById("select2").value="0"; 
                    document.getElementById(select2).value=hawel;
                    
                }
            }
            else  if(selRango===("ONZ")){
            switch (selRango2){
                case "LB": document.getElementById ("valor2").value=valor1/16;
                break;
                case "ONZ": document.getElementById ("valor2").value=valor1;
                break;
                case "T": document.getElementById("valor2").value=valor1/35274;
                break;
                default: 
                document.getElementById("valor2").value=valor1*0;
                    var hawel=document.getElementById("select2").value="0"; 
                    document.getElementById(select2).value=hawel;
                    
                }
            }
            else  if(selRango===("T")){
                switch (selRango2){
                    case "LB": document.getElementById ("valor2").value=valor1*2204.62;
                    break;
                    case "ONZ": document.getElementById ("valor2").value=valor1*35274;
                    break;
                    case "T": document.getElementById("valor2").value=valor1;
                    break;
                    default:
                        document.getElementById("valor2").value=valor1*0; 
                    var hawel=document.getElementById("select2").value="0"; 
                    document.getElementById(select2).value=hawel;
                    
                    }
                }
  
}
//funcion invertir valores.
function invertir1 (){
    //optener valores
   const valor1 =document.getElementById("valor2").value;
    const valor2 =document.getElementById("valor1").value;
    var selRango=document.getElementById("select2").value;
    var selRango2=document.getElementById("select1").value;
    
    //mostrar valores
document.getElementById("select1").value=selRango;
document.getElementById("select2").value=selRango2;
document.getElementById("valor1").value=valor1;
document.getElementById("valor2").value=valor2;

}

//favorite by Estarlin

function favorite(){
    form.classList.toggle('hiden');
    favorito.classList.toggle('hiden');
}

function agregar__favotitos(){
    ver__favotitos.classList.add("hiden");
    g__favotitos.classList.remove("hiden");

      setTimeout(() => {
        ver__favotitos.classList.remove("hiden");
        g__favotitos.classList.add("hiden");
  }, 500);
}