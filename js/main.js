/*var nota = 7;
console.log("El examen ha resultado:");
// Condición
if (nota < 5) {
    // Acción A (nota es menor que 5)
    calificacion = "desaprobado";
} else {
    // Acción B: (nota es mayor o igual que 5)
    calificacion = "aprobado";
}
console.log("Estoy", calificacion);

// Operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 5 ? "desaprobado" : "aprobado";
console.log("Estoy", calificacion);

var nota = 7;
console.log("He realizado mi examen.");
// Condición
if (nota < 5) {
    calificacion = "Insuficiente";
} else if (nota < 6) {
    calificación = "Suficiente";
} else if (nota < 8) {
    calificacion = "Bien";
} else {
    calificacion = "Sobresaliente";
}
console.log("He obtenido un", calificacion);

*/
let dia = parseInt(prompt("Ingrese dia de su cumpleanos"))
let mes = parseInt(prompt("Ingrese mes de su cumpleanos del 1 al 12  ")) 

switch (mes) {
    case 1:
        if (dia <= 21) {
            signo = "capricornio"
        } else {
            signo = "acuario"
        }
        break

    case 2:
        if (dia <= 21) {
            signo = "acuario"
        } else {
            signo = "piscis"
        }
        break
    case 3  :
        if (dia <= 21) {
            signo = "piscis"
        } else {
            signo = "aries"
        }
        break
    case 4:
        if (dia<=21) {
            signo="aries"
        }else{
            signo="Tauro"
        }
        break
}
console.log(signo)

/*
let edad=parseInt("Ingrese su edad:")
let altura=parseInt("Ingrese su altura:")
if (edad>10 && altura>1.40){
    console.log("Puede tirarse por la montana rusa xxxx")
}

var color;
color = prompt("Ingrese el color del auto");
if (color == "Rojo" || color == "Verde") {
    console.log("El auto pertenece a la categoría A");
} else{
    console.log("El auto pertenece a la categoría B");
}
//mostrar los numeros < 5
i = 0; // Inicialización de la variable contador
// Condición: Mientras la variable contador sea menor de 5
while (i < 5) {
  console.log("Valor de i:", i);
  i = i + 1; // Incrementamos el valor de i
}
// mostrar los numeros del 1 al 10
for (var i=1; i<=10; i++) {
    console.log(i);
}
// mostrar los numeros pares del 2 al 100
for (var i=2; i<=100; i+=2) {
    console.log(i);
}
  



*/









