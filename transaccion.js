function transaccion(valorPesos) {
    let valorDolares= (valorPesos/1175);
    return valorDolares;
}
let valorPesos;
let valorDolares;

let mensaje=prompt("Menu principal\n1. Ingresar transacción\n2. Salir");
switch(mensaje) {
    case "1":
   parseInt(valorPesos=prompt("Ingrese el valor de la transacción en pesos"));
    alert("El valor en dolares es: " + transaccion(valorPesos));
    break
    case "2":
        alert("Gracias por usar el sistema");
        break
        default:
            console.log("Opción no válida");
            break
}