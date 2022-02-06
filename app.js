//Se busca mandar llamar Hello al ejecutar una función
// function greet() {
//     console.log(`Hello`);
// }
// greet(); //<-mandamos llamar la función

//Ahora con esta función recibe otra función y luego la ejecuta
// function logGreeting(fn){
//     fn(); //<-Ejecuta la función
// }
// logGreeting(greet);
/*<- mandamos llamar la funcion colocando otra funcion en los parentesis pero si ingresamos otro tipo de dato fallara ya que la funcion solo ejecuta funciones*/

let x = 2;
console.log(
  "hola " + x + " veces"
); /*Este modo de juntar informacion para hacer un string no es eficiente ya que esta juntando dos tipos diferentes de datos lo que causa que gaste una mayor cantidad de recursos*/

console.log(
  `hola ${x} veces`
); /*Con los backtick se es mas eficiente ademas de mas limpio a la hora de regresar un string ya que solamente es nesesario un para de backticks y cuando se ingresa una variable se especifica*/

let greet = () => console.log(`Hello`); //la misma funcion que al principio pero como arrow function
greet();

let logGreeting = (fn) => fn(); //la misma funcion que 2° pero como arrow function
logGreeting(greet);

let cuadrado = (x) => x * x; //En esta función recibe un dato y luego multiplica ese dato por si mismo
console.log(`${cuadrado(5)}`);

logGreeting(function () {
  console.log(`Hola`);
}); //Se ejecuta una funcion

logGreeting(() => {
  console.log(`hola`);
});
