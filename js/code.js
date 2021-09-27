//variable para valores divisa 
var dataTasaLocalStorage=localStorage.getItem("Data Divisa");
if(dataTasaLocalStorage==null){
guardarValorDivisa();
}

document.getElementById("usdDop").value=JSON.parse(dataTasaLocalStorage).usdDop;
document.getElementById("usdEur").value=JSON.parse(dataTasaLocalStorage).usdEur;
document.getElementById("usdHtg").value=JSON.parse(dataTasaLocalStorage).usdHtg;
document.getElementById("dopUsd").value=JSON.parse(dataTasaLocalStorage).dopUsd;
document.getElementById("dopEur").value=JSON.parse(dataTasaLocalStorage).dopEur;
document.getElementById("dopHtg").value=JSON.parse(dataTasaLocalStorage).dopHtg;
document.getElementById("eurDop").value=JSON.parse(dataTasaLocalStorage).eurDop;
document.getElementById("eurUsd").value=JSON.parse(dataTasaLocalStorage).eurUsd;
document.getElementById("eurHtg").value=JSON.parse(dataTasaLocalStorage).eurHtg;
document.getElementById("htgDop").value=JSON.parse(dataTasaLocalStorage).htgDop;
document.getElementById("htgEur").value=JSON.parse(dataTasaLocalStorage).htgEur;
document.getElementById("htgUsd").value=JSON.parse(dataTasaLocalStorage).htgUsd;

//declarando var by Estarlin
var form = document.getElementById('form');
var form__form = document.getElementById('form__form');
var valor1 = document.getElementById('valor1'); //form__input1
var select1 = document.getElementById('select1'); //form__select1
var valor2 = document.getElementById('valor2'); //form__input2
var select2 = document.getElementById('select2'); //form__select2 
var addFavorite = document.getElementById('addFavorite'); //addFavorite 
// var selectFavorite = document.getElementById("selectFavorite"); //selectFavorite
var form__atras = document.getElementById("form__atras"); //boton atras
var botonSettingIcon = document.getElementById("botonSettingIcon"); //boton entrar a settings

//hawel
    var seleccion = document.getElementById("selConver");//analicis de tipo de convercion escogido by hawel
    var form__button_bi = document.getElementById('form__button_bi');
    var form__button_bi2 = document.getElementById('form__button_bi2');
    var favorito = document.getElementById('favorito');
    var ver__favotitos = document.getElementById('ver__favotitos');
    var g__favotitos = document.getElementById('g__favotitos');
    var valoresLongitud =['HR', 'MIN', 'SEG', 'KM','MILLA', 'MTS', 'LB', 'ONZ', 'T'] //aray de valores para trabajar by hawel
    var marcaSelec2;
    //variable para modificar los valores de convercion:
    //var USD={DOP:56.61, EUR:0.85, HTG:97 };
    //var DOP={USD:0.018, EUR:0.015, HTG:1.71 };
    //var EUR={USD:1.18, DOP:66.86, HTG:114.47 };
    //var HTG={USD:0.010, DOP:0.57, EUR:0.0086 };
    
console.log();

// creacion de las funciones para que estas realicen sus funciones

//tengo el id del primer input1 que se llama asi 
// tambien  le cree un id al select de arriba select1

function convertidorMonedas(){

    // extrajendo los valores con el id y value
    var valorInput1 = document.getElementById("valor1").value
    var valorInput2 = document.getElementById("valor2").value;
    

    // llamando a los dos id de html 

    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;

    // primera conversion dolar a a las demas monedas 
    if(select1 === "USD" ){ 
        
        switch(select2)
        {
            case "USD":
                document.getElementById("valor2").value =  valorInput1;
                break;

            case "DOP":
                console.log(usdDop);
                document.getElementById("valor2").value =  valorInput1 * JSON.parse(dataTasaLocalStorage).usdDop;
                break;
            case "EUR":
                document.getElementById("valor2").value = valorInput1 * JSON.parse(dataTasaLocalStorage).usdEur;
                break;
            case "HTG":
                document.getElementById("valor2").value = valorInput1 * JSON.parse(dataTasaLocalStorage).usdHtg;
                break;
                 
        }  
        
               

    // conversion de pesos a las demas moneads 
       
    }else if(select1 === "DOP"){
        switch(select2){
            case "USD":
                document.getElementById("valor2").value = valorInput1 * JSON.parse(dataTasaLocalStorage).dopUsd;
                break;
            case "DOP":
                document.getElementById("valor2").value = valorInput1;
                break;
            case "EUR":
                document.getElementById("valor2").value = valorInput1 * JSON.parse(dataTasaLocalStorage).dopEur;
                break;
            case "HTG":
                document.getElementById("valor2").value = valorInput1 * JSON.parse(dataTasaLocalStorage).dopHtg;
                break;                         

                
        }

        // conversion de euro a las demas moneadas
    }
    else if(select1 === "EUR"){
        switch(select2){
            case "USD":
                document.getElementById("valor2").value = valorInput1 * JSON.parse(dataTasaLocalStorage).eurUsd;
                break;
            case "DOP":
                document.getElementById("valor2").value = valorInput1 * JSON.parse(dataTasaLocalStorage).eurDop;
                break;
            case "EUR":
                document.getElementById("valor2").value = valorInput1 ;
                break;
            case "HTG":
                document.getElementById("valor2").value = valorInput1 * JSON.parse(dataTasaLocalStorage).eurHtg;
                break;  

        }

        

    }

    // conversion de htg a los demas monedas
    
    else if(select1 === "HTG"){
        switch(select2){
            case "USD":
                document.getElementById("valor2").value = valorInput1 * JSON.parse(dataTasaLocalStorage).htgUsd;
                break;
            case "DOP":
                document.getElementById("valor2").value = valorInput1 * JSON.parse(dataTasaLocalStorage).htgDop;
                break;
            case "EUR":
                document.getElementById("valor2").value = valorInput1 * JSON.parse(dataTasaLocalStorage).htgEur;
                break;
            case "HTG":
                document.getElementById("valor2").value = valorInput1;
                break; 
                
            }     

        } 


}

//funciones Hawel

function optConversion(){
    var seleccion = document.getElementById("selConver").value; //variable para saber cual medida de convercion esta selecionada.

    
    if (seleccion=="opt1") {

//eliminando los stylos de length by Estarlin
    form.classList.remove('form__Lenght');
    favorito.classList.remove('form__Lenght');
    form__form.classList.remove('form__form3');
    valor2.classList.remove('form__input3'); //form__input
    select2.classList.remove('form__select4'); //form__select
    form__button_bi.classList.remove('form__button_bi2');
    form__button_bi2.classList.remove('form__button_bi2');
    // selectFavorite.value = "opt1"  //cambiando el valor #selectFavorite select
    botonSettingIcon.classList.remove('hiden');

    //opciones a mostrar en valor 1 y 2.
    marcaSelec2=0;
    var valoresDivisa =['USD', 'DOP', 'EUR', 'HTG'];
    valor1.value="";
    valor2.value="";
   
     //borrar opciones selecion 1
     for (var i=select1.length-1; i>=0; i--)
        {
            select1.remove(select1[i]);
        }
     //borrar opciones selecion 2
    for (var i=select2.length-1; i>=0; i--)
        {
            select2.remove(select2[i]);
        }
    
    //crear opciones select1
    for(var i=0; i<valoresDivisa.length; i++)
        { 
            const opcselect =document.createElement("option");
            opcselect.value=valoresDivisa[i];
            opcselect.textContent=valoresDivisa[i];
            select1.appendChild(opcselect);
        }
    //crear opciones select2
    for(var i=0; i<valoresDivisa.length; i++)
        { 
            const opcselect =document.createElement("option");
            opcselect.value=valoresDivisa[i];
            opcselect.textContent=valoresDivisa[i];
            select2.appendChild(opcselect);
        }
 
        select1.value=valoresDivisa[0];
        select2.value=valoresDivisa[1];
        
        //localStorage.setItem ( USD.DOP=56.61);
    }
    else if (seleccion=="opt2") {
//aplicando los stylos de length by Estarlin
    form.classList.add('form__Lenght');
    favorito.classList.add('form__Lenght');
    form__form.classList.add('form__form3');
    valor2.classList.add('form__input3'); //form__input
    select2.classList.add('form__select4'); //form__select
    form__button_bi.classList.add('form__button_bi2');
    form__button_bi2.classList.add('form__button_bi2');
    // selectFavorite.value = "opt2" //cambiando el valor #selectFavorite select
    botonSettingIcon.classList.add('hiden');
    
    
    //opciones a mostrar en valor 1 y 2.
    //var valoresLongitud =['HR', 'MIN', 'SEG', 'KM','MILLA', 'MTS', 'LB', 'ONZ', 'T'];
    valor1.value="";
    valor2.value="";
   
     //borrar opciones selecion 1
     for (var i=select1.length-1; i>=0; i--)
        {
            select1.remove(select1[i]);
        }
    
    //crear opciones select1
    for(var i=0; i<valoresLongitud.length; i++)
        { 
            const opcselect =document.createElement("option");
            opcselect.value=valoresLongitud[i];
            opcselect.textContent=valoresLongitud[i];
            select1.appendChild(opcselect);
            
        }
   
    //llamar funcion borrar y crear opciones select2
   
        cambioselec1();
        }    
    
    }
   
    function cambioselec1()
        {   
           
            var hawel=select1.value;
            switch(hawel){
                   
                    case "HR":  case "MIN": case "SEG":
                        if (marcaSelec2 !=1){
                        marcaSelec2=1;
                        for (var i=select2.length-1; i>=0; i--)
                            {
                                select2.remove(select2[i]);
                                
                            }
                    
                    //crear opciones select2
                        for(var i=0; i<=2; i++)
                            { 
                                const opcselect =document.createElement("option");
                                opcselect.value=valoresLongitud[i];
                                opcselect.textContent=valoresLongitud[i];
                                select2.appendChild(opcselect);
                            
                            }
                        }
                    break;
                    case "KM":  case "MILLA": case "MTS":
                        if (marcaSelec2 !=2){
                            marcaSelec2=2;
                        for (var i=select2.length-1; i>=0; i--)
                            {
                                select2.remove(select2[i]);
                                
                            }
                    
                    //crear opciones select2
                        for(var i=3; i<=5; i++)
                            { 
                                const opcselect =document.createElement("option");
                                opcselect.value=valoresLongitud[i];
                                opcselect.textContent=valoresLongitud[i];
                                select2.appendChild(opcselect);
                            
                            }
                        }
                    break;
                    case "LB":  case "ONZ": case "T":
                        if (marcaSelec2 !=3){
                            marcaSelec2=3;
                        for (var i=select2.length-1; i>=0; i--)
                            {
                                select2.remove(select2[i]);
                                
                            }
                    
                    //crear opciones select2
                        for(var i=6; i<=8; i++)
                            { 
                                const opcselect =document.createElement("option");
                                opcselect.value=valoresLongitud[i];
                                opcselect.textContent=valoresLongitud[i];
                                select2.appendChild(opcselect);
                            
                            }
                        }
                    break;

                        
                }
                convertidor()

            
        }        
function convertidor(){
    var valoresLongitud =['HR', 'MIN', 'SEG', 'KM','MILLA', 'MTS', 'LB', 'ONZ', 'T'];
    const valor1=document.getElementById("valor1").value;
    const valor2=document.getElementById("valor2").value;
    var selRango=document.getElementById("select1").value;
    var selRango2=document.getElementById("select2").value;

    //limpiar entrada de valores
    if (valor1===""){valor2="";}


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
//Setting
//Boton entrar a settings
function botonSetting(){
    form.classList.toggle('hiden');
    settings.classList.toggle('hiden');
}

//Boton atras settings
function atrasS(){
    form.classList.toggle('hiden');
    settings.classList.toggle('hiden');
}

//favorite by Estarlin

//Boton atras favorite
function atrasF(){
    form.classList.toggle('hiden');
    favorito.classList.toggle('hiden');
}

//Boton favorite
function favorite(){
    form.classList.toggle('hiden');
    favorito.classList.toggle('hiden');
}

//++;
a = 0;
b = 0;

//Delete__favotitos by Estarlin
function delete__favotitos(comp){
    var id = comp.id;
    localStorage.removeItem(id);
    document.getElementById("l"+id).classList.add('hiden');
}

//agregar__favotitos by Estarlin
function agregar__favotitos(){
    a++;
    b++;
    ver__favotitos.classList.add("hiden");
    g__favotitos.classList.remove("hiden");

    setTimeout(() => {
        ver__favotitos.classList.remove("hiden");
        g__favotitos.classList.add("hiden");
}, 500);

const seleccion1 = document.getElementById("select1").value;
const seleccion2 = document.getElementById("select2").value;
const resultado1 = document.getElementById("valor1").value;
const resultado2 = document.getElementById("valor2").value;
   
var dataFavorite = `
    <div id=l${a}>
    <p>
        <b>-</b> ${resultado1} <b>${seleccion1}</b> = ${resultado2} <b>${seleccion2}</b> 
    </p>    
        <button id=${a} onclick="delete__favotitos(this)">
            Delete
        </button>
    </div>    
        `;

var totalFav = `
    <input class="hiden" id="contador" value="${b}"></input>
`;


    localStorage.setItem(a, dataFavorite);
    localStorage.setItem("totalFav", totalFav);
    addFavorite.innerHTML += localStorage.getItem(a);
}

//devolviendo el resultado del localStorege by Estarlin
for(var i =0; i < localStorage.length; i++){
   if(localStorage.key(i)=="Data Divisa"){
    i=i+1;}
    if (localStorage.key(i)==null){
        break;
    }
    var element = localStorage.getItem(localStorage.key(i));
    addFavorite.innerHTML += element;
} 
  

  var contador = document.getElementById("contador");
  b = contador.value;
  a = contador.value;


  function optFavorite(){
    if(selectFavorite.value === "opt1"){
//eliminando los stylos de length by Estarlin
        form.classList.remove('form__Lenght');
        favorito.classList.remove('form__Lenght');
        form__form.classList.remove('form__form3');
        valor2.classList.remove('form__input3'); //form__input
        select2.classList.remove('form__select4'); //form__select
        form__button_bi.classList.remove('form__button_bi2');
        form__button_bi2.classList.remove('form__button_bi2');
        seleccion.value = "opt1"; //cambiando el valor #selConver select
        optConversion();



    }else if(selectFavorite.value === "opt2"){
//aplicando los stylos de length by Estarlin
        form.classList.add('form__Lenght');
        favorito.classList.add('form__Lenght');
        form__form.classList.add('form__form3');
        valor2.classList.add('form__input3'); //form__input
        select2.classList.add('form__select4'); //form__select
        form__button_bi.classList.add('form__button_bi2');
        form__button_bi2.classList.add('form__button_bi2');
        seleccion.value = "opt2"; //cambiando el valor #selConver select
        optConversion();
    }
  }

  function guardarValorDivisa(){ 
    var usdDop1=document.getElementById("usdDop").value;
    var usdEur1=document.getElementById("usdEur").value;
    var usdHtg1=document.getElementById("usdHtg").value;
    var dopUsd1=document.getElementById("dopUsd").value;
    var dopEur1=document.getElementById("dopEur").value;
    var dopHtg1=document.getElementById("dopHtg").value;
    var eurUsd1=document.getElementById("eurUsd").value;
    var eurDop1=document.getElementById("eurDop").value;
    var eurHtg1=document.getElementById("eurHtg").value;
    var htgUsd1=document.getElementById("htgUsd").value;
    var htgDop1=document.getElementById("htgDop").value;
    var htgEur1=document.getElementById("htgEur").value;
    var tasasDivisa={
        "usdDop":usdDop1, "usdEur":usdEur1, "usdHtg":usdHtg1, 
        "dopUsd":dopUsd1, "dopEur":dopEur1, "dopHtg":dopHtg1, 
        "eurDop":eurDop1, "eurUsd":eurUsd1, "eurHtg":eurHtg1, 
        "htgDop":htgDop1, "htgEur":htgEur1, "htgUsd":htgUsd1,
};
    
    localStorage.setItem("Data Divisa", JSON.stringify(tasasDivisa));
      //(usdDop.value+usdEur.value+usdHtg.value+dopEur.value+dopHtg.value+dopUsd.value+eurDop.value+eurHtg.value+eurUsd.value+htgDop.value+htgEur.value+htgUsd.value);
    
      
  }

var contador = document.getElementById("contador");
b = contador.value;
a = contador.value;

//redondea
// const resultado11 = document.getElementById("valor1").value;
// console.log(JSON.parse(document.getElementById("valor1").value).toFixed(4));