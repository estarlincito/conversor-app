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
    if(select1 === "USD" ){
        
        switch(select2)
        {
            case "USD":
                document.getElementById("valor2").value =  valorInput1;
                break;

            case "DOP":
                document.getElementById("valor2").value =  valorInput1 * 56.61;
                break;
            case "EUR":
                document.getElementById("valor2").value = valorInput1 * 0.85;
                break;
            case "HTG":
                document.getElementById("valor2").value = valorInput1 * 97.00;
                break;
                 
        }  
        
               

    // conversion de pesos a las demas moneads 
       
    }else if(select1 === "DOP"){
        switch(select2){
            case "USD":
                document.getElementById("valor2").value = valorInput1 * 0.018;
                break;
            case "DOP":
                document.getElementById("valor2").value = valorInput1;
                break;
            case "EUR":
                document.getElementById("valor2").value = valorInput1 * 0.015;
                break;
            case "HTG":
                document.getElementById("valor2").value = valorInput1 * 1.71;
                break;                         

                
        }

        // conversion de euro a las demas moneadas
    }
    else if(select1 === "EUR"){
        switch(select2){
            case "USD":
                document.getElementById("valor2").value = valorInput1 * 1.18;
                break;
            case "DOP":
                document.getElementById("valor2").value = valorInput1 * 66.86;
                break;
            case "EUR":
                document.getElementById("valor2").value = valorInput1 ;
                break;
            case "HTG":
                document.getElementById("valor2").value = valorInput1 * 114.47;
                break;  

        }

        

    }

    // conversion de htg a los demas monedas
    
    else if(select1 === "HTG"){
        switch(select2){
            case "USD":
                document.getElementById("valor2").value = valorInput1 * 0.010;
                break;
            case "DOP":
                document.getElementById("valor2").value = valorInput1 * 0.57;
                break;
            case "EUR":
                document.getElementById("valor2").value = valorInput1 *0.0086 ;
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

    
    if (seleccion=="opt1"){  alert("hawel");
//eliminando los stylos de length by Estarlin
    form.classList.remove('form__Lenght');
    favorito.classList.remove('form__Lenght');
    form__form.classList.remove('form__form3');
    valor2.classList.remove('form__input3'); //form__input
    select2.classList.remove('form__select4'); //form__select
    form__button_bi.classList.remove('form__button_bi2');
    form__button_bi2.classList.remove('form__button_bi2');  

    //opciones a mostrar en valor 1 y 2.
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

    
    //opciones a mostrar en valor 1 y 2.
    var valoresLongitud =['HR', 'MIN', 'SEG', 'KM','MILLA', 'MTS', 'LB', 'ONZ', 'T'];
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
    for(var i=0; i<valoresLongitud.length; i++)
        { 
            const opcselect =document.createElement("option");
            opcselect.value=valoresLongitud[i];
            opcselect.textContent=valoresLongitud[i];
            select1.appendChild(opcselect);
        }
    
    //crear opciones select2
    for(var i=0; i<3; i++)
        { 
            const opcselect =document.createElement("option");
            opcselect.value=valoresLongitud[i];
            opcselect.textContent=valoresLongitud[i];
            select2.appendChild(opcselect);
        }
    }
 
        //select1.value=valoresLongitud[0];
        //select2.value=valoresLongitud[1];
    
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
    
      select2[0].value="KM";
      select2[0].textContent="KM";
      select2[1].value="MILLA";
      select2[1].textContent="MILLA";
      select2[2].value="MTS";
      select2[2].textContent="MTS";
       
        }
    else if(selRango===("HR")||selRango===("MIN")||selRango===("SEG")){
            
       //crear opciones select1
       select2[0].value="HR";
      select2[0].textContent="HR";
      select2[1].value="MIN";
      select2[1].textContent="MIN";
      select2[2].value="SEG";
      select2[2].textContent="SEG";
    }

    else if(selRango===("LB")||selRango===("ONZ")||selRango===("T")){
    
   //crear opciones select1
   select2[0].value="LB";
   select2[0].textContent="LB";
   select2[1].value="ONZ";
   select2[1].textContent="ONZ";
   select2[2].value="T";
   select2[2].textContent="T";
        
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
//agregar__favotitos by Estarlin
function agregar__favotitos(){
    ver__favotitos.classList.add("hiden");
    g__favotitos.classList.remove("hiden");

      setTimeout(() => {
        ver__favotitos.classList.remove("hiden");
        g__favotitos.classList.add("hiden");
  }, 500);


  //Datos del localStorege ||  by Estarlin
  const seleccion1 = document.getElementById("select1").value;
  const seleccion2 = document.getElementById("select2").value;
  const resultado1 = document.getElementById("valor1").value;
  const resultado2 = document.getElementById("valor2").value;

console.log(seleccion1 + " " + resultado1 + " " + seleccion2 + " " + resultado2);
}