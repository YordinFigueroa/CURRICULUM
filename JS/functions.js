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
let edad  = 17; //entero
var ver = true; //boolean
let fal = false; //boolean

//OPERADORES BÁSICOS


//valores enteros y decimales son en morado
//valores en string en blanco
var suma = 5+2;
console.log(suma)
var var_uno = 10;
var var_dos = 5;
console.log(var_uno-var_dos);
console.log(var_uno*var_dos);
console.log(var_uno/var_dos);
console.log(var_uno%var_dos);

//OPERADORES DE COMPARACIÓN
// = Asignación
// == conparación (valor)
// === estritamente comparado(valor y el tipo de dato)
// > / >= / <= / < /


console.log("Mi edad es: " + edad);

function load_page(){
    Swal.fire(
        {
        imageUrl: ("https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg"),
        showConfirmButtom: false,
        timer: 2000
    }
    );
}

function send_form(){
    let name      = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
        Swal.fire({
            title: "Cajas de Texto vacías",
            text: "Alguna de las cajas de texto se encuentra vacía",
            icon: "error"
        });
        if(name.length == 0){
            document.getElementById("name").style.border = "2px solid red"
        }
        else{
            document.getElementById("name").style.border = "2px solid green"
        }
        if(last_name.length == 0){
            document.getElementById("last_name").style.border = "2px solid red"
        }
        else{
            document.getElementById("last_name").style.border = "2px solid green"
        }
    }
    else{
        document.getElementById("print").innerText = "Su nombre es: " + name + " " + last_name;
        document.getElementById("name").style.border = "2px solid green"
        document.getElementById("last_name").style.border = "2px solid green"
    }
}

//ARRAYS

var array_semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var array_gral = [1,2,3,2.5, "abc", "Soy Santiago"];
var array_num = [1,2,3,4,5,6,7,8,9];

var array_multi = [
{name:"Santiago", age:18, color:"Verde"},
{name:"Anyi", age:33, color:"Rosa"},
{name:"Celeste", age:3, color:"Rosa"},
{name:"Antonella", age:2, color:"Blanco"}
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

function action(){
  //alert(array_num);
  //Swal.fire(""+array_num); //esta hecho para string entonces se concatena un espacion vacio ""

  // console.log(array_num);
  // console.log(array_num.length);
var result = 0;

for(let i=0; i<array_num.length;i++){
    result = result+array_num[i]
}

document.getElementById("result").innerHTML = "<strong> El resultado es:"+result+" <strong>"; 
document.getElementById("result").style.color = "green";

  //CON UN FOR
var total = 0;
for(var j=0; j<array_multi.length; j++){
    total = array_multi[j].age + total;
}
alert(total);


  //CON UN WHILE
var total_dos = 0;
var w = 0;
while(w<array_multi.length){
    total_dos = array_multi[w].age + total_dos;
    w++;
}
alert(total_dos);
}

var array_numerico = [1,2,3,4,5,6,7,8,9];


function agregar(){
let num = document.getElementById("num").value;
let array_add = array_numerico.push(num);
console.log(array_add);
console.log(array_numerico);
document.getElementById("impresion").value = array_numerico;
}

function eliminar_prim(){
let num = document.getElementById("num").value;
let array_prim = array_numerico.shift(num);
document.getElementById("impresion").value = array_numerico;

}

function eliminar_ult(){
let array_delete = array_numerico.pop();
document.getElementById("impresion").value = array_numerico;
}

function reves(){
document.getElementById("impresion").value = array_numerico.reverse();
}

function limpiar(){
document.getElementById("result").innerText = "";
document.getElementById("name").value = "";
document.getElementById("last_name").value = "";
document.getElementById("num").value = "";
}