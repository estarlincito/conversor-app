//declarando var by Estarlin
    var form = document.getElementById('form');
    var form__form = document.getElementById('form__form');
    var valor1 = document.getElementById('valor1'); //form__input1
    var select1 = document.getElementById('select1'); //form__select1
    var valor2 = document.getElementById('valor2'); //form__input2
    var select2 = document.getElementById('select2'); //form__select2 
    var addFavorite = document.getElementById('addFavorite'); //addFavorite 
    var selectFavorite = document.getElementById("selectFavorite"); //selectFavorite

//hawel
    var seleccion = document.getElementById("selConver");//analicis de tipo de convercion escogido by hawel
    var form__button_bi = document.getElementById('form__button_bi');
    var form__button_bi2 = document.getElementById('form__button_bi2');
    var favorito = document.getElementById('favorito');
    var ver__favotitos = document.getElementById('ver__favotitos');
    var g__favotitos = document.getElementById('g__favotitos');
    var valoresLongitud =['HR', 'MIN', 'SEG', 'KM','MILLA', 'MTS', 'LB', 'ONZ', 'T'] //aray de valores para trabajar by hawel
    var marcaSelec2;
    


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

    
    if (seleccion=="opt1") {
//eliminando los stylos de length by Estarlin
    form.classList.remove('form__Lenght');
    favorito.classList.remove('form__Lenght');
    form__form.classList.remove('form__form3');
    valor2.classList.remove('form__input3'); //form__input
    select2.classList.remove('form__select4'); //form__select
    form__button_bi.classList.remove('form__button_bi2');
    form__button_bi2.classList.remove('form__button_bi2');
    selectFavorite.value = "opt1"  //cambiando el valor #selectFavorite select

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
    selectFavorite.value = "opt2" //cambiando el valor #selectFavorite select
    
    
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

//favorite by Estarlin
    function favorite(){
        form.classList.toggle('hiden');
        favorito.classList.toggle('hiden');
    }

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
            <b>-</b> ${resultado1} <b>${seleccion1}</b> = ${resultado2} <b>${seleccion2}</b> 
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
    }
  }

  //no cambiar el valor de los imputs cuando hago el cambio desde favorito de currency a length
  //estoy peensando crear un array de usd,eth, dod... para hacer el filtro de currency a length al mostrar los elemndos(indexOf)