window.onload=function(){//Esta funcion se utiliza para inicializar las funciones principales antes del codigo.
    let numeros = document.getElementById('numeros');
    numeros = 'se han encontrado ${items} peliculas'
    let items = document.getElementsByTagName('items').length;
}

function añadir(){//Funcion añadir
    //console.log('Hola');

let Nombre = document.getElementById('nombre');//Declaracion de variable Nombre evaluada a su Id
let NombreV = document.getElementById('nombre').value;
  //console.log(Nombre);
let Genero = document.getElementById('genero');//Declaracion de variable Genero evaluada a su Id
let GeneroV = document.getElementById('genero').value;
  //console.log('Genero');
let Stock = document.getElementById('stock'); //Declaracion de variable Stock evaluada a su Id
let StockV = document.getElementById('stock').value;
   //console.log('Stock');
let Raiting = document.getElementById('raiting');//Declaracion de variable Raiting evaluada a su Id
let RaitingV = document.getElementById('raiting').value;
   //console.log('raiting');

//Condicional IF, si la variable nombre evaluada con la funcion (Trim) es diferente de (nada) se pintara de un color y se añadira un borde,
if(Nombre.value.trim()==''){//pero si no, se le dara otro color.
    //console.log('Hola');
    Nombre.style.border ='1px solid red';
 }else{
    //console.log('Hola');
    Nombre.style.borderColor ='gray';
    Nombre.style.backgroundColor = 'white';
 }

if(Genero.value.trim()==''){
    //console.log('Hola');
    Genero.style.border='1px solid red';
}else{
    Genero.style.borderColor ='gray';
    Genero.style.backgroundColor = 'white';
}

if(Stock.value.trim()==''){
     //console.log('Hola');
    Stock.style.border='1px solid red';
}else{
    Stock.style.borderColor ='gray';
    Stock.style.backgroundColor = 'white';
}

if(Raiting.value.trim()==''){
     //console.log('Hola');
    Raiting.style.border='1px solid red';
}else{
    Raiting.style.borderColor ='gray';
    Raiting.style.backgroundColor = 'white';
}

 let Tabla=document.getElementById('tabla').length;
// //Declaracion de variable Tabla que se evaluara con su Id tabla, .length(enfatizara en el numero de elmentos que existen.)
// // console.log('tbody')

 let estrellas='';
 switch(RaitingV){
     //Ciclo switch
     case '1':
     //Cada caso representa un suceso en los iconos.
     //En este caso se pintaran de color rojo.
     estrellas='<span style="color: red">★</span>'
     break
     case '2':
     //En este caso se pintaran de color azul.
     estrellas='<span style="color: blue">★★</span>'
     break
     case '3':
     //En este caso se pintaran de color azul.
     estrellas='<span style="color: blue">★★★</span>'
     break
     case '4':
     //En este caso se pintaran de color azul.
     estrellas='<span style="color: blue">★★★★</span>'
     break
     case '5':
     //En este caso se pintaran de color amarillo.
     estrellas='<span style="color: yellow">★★★★★</span>'
     break;
 }

 let tr = document.createElement('tr');
 //Declaracion de Tr
 let Agregar = '';
 let fila;
 let items=0;
 let tabla = document.getElementById('tabla');

 if(Agregar = 1){
    fila = `<tr>
 <td>${items+1}</td>
 <td>${NombreV}</td>
 <td>${GeneroV}</td>
 <td>${StockV}</td>
 <td>${estrellas}</td>
 <td>
 <a href="pelicula-ficha.htm" class="btn btn-info btn-sm">
     <span class="material-icons">info</span> Ficha
 </a>
      <a href="pelicula-ficha.htm" class="btn btn-primary btn-sm">
          <span class="material-icons">movie_filter</span> Rentar
      </a>
  </td>
  </tr>`


  document.getElementById("tabla").innerHTML += fila;
//   tr.innerHTML = fila;
//   tabla.appendChild('tr');
//   const myNotification = window.createNotification({});
//              // options here
//              myNotification({
//                  title: 'Listo', 
//                  message: 'La pelicula "Agregar ha sido agregada"'
//        });

     }
}
