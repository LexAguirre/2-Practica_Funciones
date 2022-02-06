//Se busca mandar llamar Hello con una función
// function greet() {
//     console.log(`Hello`);
// }
// greet();
 
// function logGreeting(fn){
//     fn();
// }
// logGreeting(greet);
 
let x = 2;
console.log("hola " + x + " veces"); //Este modo de juntar informacion para hacer un string no es eficiente ya
//que esta juntando dos tipos diferentes de datos lo que causa que gaste una mayor cantidad de recursos
console.log(`hola ${x} veces`); //Con los backtick se es mas eficiente ademas de mas limpio a la hora de regresar un string
//ya que solamente es nesesario un para de backticks y cuando se ingresa una variable se especifica
 
let greet = () => console.log(`Hello`);
greet();
 
let logGreeting = (fn) => fn();
logGreeting(greet);
 
let cuadrado = (x) => x * x;
console.log(`${cuadrado(5)}`);
 
logGreeting(function(){console.log(`Hola`)}); //
 
logGreeting(() => {console.log(`hola`);});

