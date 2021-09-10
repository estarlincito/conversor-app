// funcion de convertir 

alert("Esta funcionando la conexion");

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
