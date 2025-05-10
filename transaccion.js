
//Variables
let mensaje;
let valorPesos;
let valorDolares;
const tasaCambioDolares = 1175;
let history = []; 

//Funcion que encapsula la lógica del cambio de divisa y
//empuja los datos de la conversión al array history.
function transaccion(valorPesos) {
    valorDolares = (valorPesos/tasaCambioDolares).toFixed(2);
    alert("El valor en dólares es: $" + valorDolares);
    //Empuja los datos del cambio de divisa al array historial.
            history.push({
                tipo: "Divisa",
                Entrada: valorPesos,
                Salida: valorDolares,
                Fecha: new Date().toLocaleString()
            });
}

do {
    mensaje = prompt("Menu principal\n1. Ingresar transacción\n2. Salir");
    switch (mensaje) {
        case "1":
            //Si el usuario elige 1 entramos en el proceso de conversión
            valorPesos = parseFloat(prompt("Ingrese el valor de la transacción en pesos"));

            //Control para que no se ingresen montos negativos.
            if(valorPesos > 0){
                transaccion(valorPesos);
                
            }
            else{
                alert("Monto inválido.");
            }
            break;

        case "2":
            alert("Gracias por usar el sistema");
            break;
            //Si el usuario elige otra opción que no sean las disponibles
        default:
            alert("Opción no válida");
            break;
    }
} while (mensaje !== "2");

//Se muestran el historial de los cambios de divisa en pantalla.
console.log("Historial de cambios:", history);