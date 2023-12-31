//TIPOS DE DATOS
let msg:string;
//BOOL
let esCasado:boolean = false;
//esCasado = 12; //ERROR

msg = esCasado ? 'casado': 'No casado';
console.log(msg);
esCasado = obtenerEstadoCivil(true);
msg = esCasado ? 'casado': 'No casado';
console.log(msg);

function obtenerEstadoCivil(state:boolean): boolean{
    return state;
}

//NUMBER: INT - FLOAT ETC
let numero:number = 12.9;

let edadex:number = 18;
msg = edadex >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(msg);

function obtenerEdad(num:number): number{
    return num;
}

//String
let nombreex:string = "Dough";
let apellido:string = "Narval";
let resultado:string = nombreex + " " + apellido;
console.log(resultado);
//Metodos
//Mayusculas y minusculas
resultado = resultado.toUpperCase();
resultado = resultado.toLowerCase();
//Caracter en la posicion
let chartIndex: string = resultado.charAt(1); //o

//arrays
//array de numeros
let numbers: number[] = [1, 0, 10, 2];
//array de strings
let names: string[] = ["pedro", "illo", "juan"];
//array de varios tipos de datos
let misc: (boolean | number)[] = [1, true, 2, false, -1];

//tuplas
let datos:[string, number];
datos = ["a", 2];

//Enum: Nos permite almacenar un conjunto de constantes con valor definido.
enum Estado{
    activo, //0
    inactivo //1
}

enum TiposDeUsuarios{
    supremo = 1,
    coordinadorSaludMental = 10,
    psicologo = 20,
}

//Any: Variable que admite cualquier tipo de dato
let cualquierValor: any;
cualquierValor = "Cualquier valor";

cualquierValor = false;

//void funciones que no retornan nada like c#
function Stats(armor:number, life:number): void{
    console.log(armor, life)
}

//Null & undefined desactivar strict
let monto: number = null;

//Type Assertions: Casteos, conversiones de tipo de dato
let val: any = "Hi im a string";
let res: number = (<string> val).length;
let res2:number = (val as string).length;

//Scope let vs var
var numGlobal: number = 120;
var numGlobal: number = 23;
let chain = "hola";

//const. Dato que no puede cambiar. No puede mutar. Tiene scope let
const state: boolean = false;
// state = true; //error

for (const iterator of [1,2,3,4,1,2,3,4]) {
    console.log(iterator);
}

//array destructuring
let frutas: string[] = ["manzana", "uva", "piña"];
let [item1, item2, item3] = frutas; //A cada uno de los valores se les asignan estos elementos
console.log(item2);
//Si se quiere obtener uno en especifico, se puede hacer asi:
let [,,itemPiña] = frutas;
console.log(itemPiña);

//Tuple destrucuturing
let persona: [string[], number, string, string[]];
persona = [["luis", "narval"], 24, "masculino", ["nodejs", "Typescript"]];

let [nombreP, edadP, generox, lenguajes] = persona;
console.log(nombreP);

//object destructuring
let personaObject = {
    nombre: ["Luis", "Narval"],
    edad: 34,
    genero: "masculino",
    intereses: ["musica", "javascript"]
}
// let nombreObject:string[] = personaObject.nombre;
// let edadObject:number = personaObject.edad;

let {nombre, edad, genero, intereses} = personaObject;
console.log(nombre);

//SPREAD - Operador de propagacion. Es lo contrario a la destructuracion
let nombres: string[] = ["pedro", "illo", "juan"];
let numeros: number[] = [1,2,3,4,1,2,3,4];

let agrupar =["Prueba", 100, ...nombres, ...numeros];

let libro = {
    autor: "Oscar",
    titulo: "WOM",
    fecha: new Date(2023, 12, 6),
}

let vehiculo = {
    color: "Negro",
    puerta: "A31",
    marca: "Toyota",
}

let agruparObjeto = {
    prueba: "Test",
    ...libro,
    ...vehiculo,
};

//-----------DEFAULT & OPTIONAL VALUES----------------//
//opcional: marcar con ? el final de la variable: val2?
function getValues(objeto: { val1: string, val2?: number}): void{
    let {val1, val2} = objeto;
    console.log(val1);
    console.log(val2)
}

getValues({val1: "camisa", val2: 23});

function notify(text:string = "Default value"): void{
    console.log(text);
}
notify();