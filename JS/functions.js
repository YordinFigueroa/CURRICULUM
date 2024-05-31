//4 formas de impresion
// alert("HOLA DESDE UN ARCHIVO EXTERNO");
// console.log("HOLA DESDE LA CONSOLA");
// document.write("HOLA DESDE LA INTERFAZ");
// Swal.fire("HOLA DESDE SWETTALERT");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "question"
//   });

// VARIABLES Y TIPOS DE DATOS
const pi = 3.14;  //decimal 
const pul = 2.54;
var name = "Yordin Figueroa"; //String  
let edad = 32; //entero
var ver = true; //boolean
let fal = false; //boolean

//OPERADORES BÁSICOS


//valores enteros y decimales son en morado
//valores en string en blanco
var suma = 5 + 2;
console.log(suma)
var var_uno = 10;
var var_dos = 5;
console.log(var_uno - var_dos);
console.log(var_uno * var_dos);
console.log(var_uno / var_dos);
console.log(var_uno % var_dos);

//OPERADORES DE COMPARACIÓN
// = Asignación
// == conparación (valor)
// === estritamente comparado(valor y el tipo de dato)
// > / >= / <= / < /


console.log("Mi edad es: " + edad);

function load_page() {
Swal.fire(
    {
    imageUrl: ("https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg"),
    showConfirmButtom: false,
    timer: 2000
    }
);

document.getElementById("text").innerText = "El array a calcular es: " + array_num;
document.getElementById("impresion").value = array_num;
document.getElementById("name_search").value = nombre_form;

let hour_system = new Date();
let dia = hour_system.getDay();

console.log(hour_system.getDate());
console.log(hour_system.getDay());
console.log(hour_system.getHours());
console.log(hour_system.getFullYear());
console.log(hour_system.getMilliseconds());
console.log(hour_system.getMinutes());
console.log(hour_system.getMonth());
console.log(hour_system.getSeconds());
console.log(hour_system.getTime());
console.log(hour_system.getTimezoneOffset());
console.log(hour_system.getUTCDate());
console.log(hour_system.getUTCDay());
console.log(hour_system.getUTCFullYear());
console.log(hour_system.getUTCHours());
console.log(hour_system.getUTCMilliseconds());


let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
for(let i=0; i < dias.length; i++){
    console.log(dias[dia]);
}

console.log("Hoy es: " + dias[dia]);


let array_months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"];
    
let dia_mes = hour_system.getMonth() + 1;
console.log(hour_system.getDate()+ "/" + dia_mes + "/" + hour_system.getFullYear());


document.getElementById("hour_system").value = hour_system;

}

function send_form() {
let name = document.getElementById("name").value;
let last_name = document.getElementById("last_name").value;
let pass_one = document.getElementById("pass_one").value;
let pass_two = document.getElementById("pass_two").value;
if (name.length == 0 || last_name.length == 0 || pass_one.length == 0 || pass_two.length == 0) {
    Swal.fire({
    title: "Cajas de Texto vacías",
    text: "Alguna de las cajas de texto se encuentra vacía",
    icon: "error"
    });
        // if(name.length == 0){
        //     document.getElementById("name").style.border = "2px solid red"
        // }
        // else{
        //     document.getElementById("name").style.border = "2px solid green"
        // }
        // if(last_name.length == 0){
        //     document.getElementById("last_name").style.border = "2px solid red"
        // }
        // else{
        //     document.getElementById("last_name").style.border = "2px solid green"
        // }
}
    

else if (pass_one != pass_two) {
    Swal.fire({
    title: "Sus contraseñas no son iguales",
    text: "Por favor valide sus credenciales",
    icon: "error"
    });
    
}
else {
    document.getElementById("print").innerText = "Su nombre es: " + name + " " + last_name;
    console.log(isNaN(name));
}
}



//ARRAYS

var array_semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var array_gral = [1, 2, 3, 2.5, "abc", "Soy Santiago"];
var array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var array_multi = [
{ name: "Santiago", age: 18, color: "Verde" },
{ name: "Anyi", age: 33, color: "Rosa" },
{ name: "Celeste", age: 3, color: "Rosa" },
{ name: "Antonella", age: 2, color: "Blanco" }
];

//yeison

var json_ejm = {
name: "Santiago",
lastname: "Figueroa",
phone: "3133399287",
email: "msfigueroam@ufpso.edu.co"
};

console.log(array_semana);
console.log(array_gral);
console.log(array_num);
console.log(array_multi);
console.log(json_ejm);

function action() {
  //alert(array_num);
  //Swal.fire(""+array_num); //esta hecho para string entonces se concatena un espacion vacio ""

  // console.log(array_num);
  // console.log(array_num.length);
var result = 0;

for (let i = 0; i < array_num.length; i++) {
    result = result + array_num[i]
}

document.getElementById("result").innerHTML = "<strong> El resultado es:" + result + " <strong>";
document.getElementById("result").style.color = "green";


  //CON UN FOR
var total = 0;
for (var j = 0; j < array_multi.length; j++) {
    total = array_multi[j].age + total;
}
alert(total);


  //CON UN WHILE
var total_dos = 0;
var w = 0;
while (w < array_multi.length) {
    total_dos = array_multi[w].age + total_dos;
    w++;
}
alert(total_dos);
}

var array_numerico = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function agregar() {
let num = document.getElementById("num").value;

if(isNaN(num) == true){
    Swal.fire("Solo se aceptan números")
}
else{
    let array_add = array_numerico.push(num);
    console.log(array_add);
    console.log(array_numerico);
document.getElementById("impresion").value = array_numerico;
}


}

function eliminar_prim() {
let num = document.getElementById("num").value;
let array_prim = array_numerico.shift(num);
document.getElementById("impresion").value = array_numerico;

}

function eliminar_ult() {
let array_delete = array_numerico.pop();
document.getElementById("impresion").value = array_numerico;
}

function reves() {
document.getElementById("impresion").value = array_numerico.reverse();
}

function limpiar() {
document.getElementById("result").innerText = "";
document.getElementById("name").value = "";
document.getElementById("last_name").value = "";
document.getElementById("num").value = "";
}


var nombre_form = "Yordin Mauricio Figueroa Perez";

function search(){
let nombre_buscar = document.getElementById("name_search").value;
  //Swal.fire(nombre_buscar.toLowerCase()); // toUppercase() Mayus
  // Swal.fire({
  //   title: nombre_buscar.toLowerCase(),
  //   text: "Alguna de las cajas de texto se encuentra vacía",
  //   icon: "error"
  // });

  //Swal.fire(nombre_buscar.charAt(0));
  //let word = nombre_buscar.indexOf('e');
  //let word = nombre_buscar.lastIndexOf('e');
  //let word = nombre_buscar.substring(5,15);
let word = nombre_buscar.split("");
Swal.fire(word+"");
console.log(word);
let word_com = word.join("");
console.log(word_com);




}