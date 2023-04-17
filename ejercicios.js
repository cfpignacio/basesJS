// El siguente ejercicio tiene un error lo que impide
// imprimer por consola el listado, encontrar el error
// y solucionarlo
// const array = ["Java","Python","C","C++"]

// for (const index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }

// salida esperada ->
// Java
// Python
// C
// C++
// Ignacio
// const nombre = "Pedro"
// if(true){
//     var nombre = "Lucas"
//     console.log(nombre)
// }

// salida esperada Lucas

// -----------------------------------------------------------------------------------------------------

// Conventir las siguentes funcion en "funciones flecha"

// function esNumeroPrimo(numero) {
// 	if (numero <= 1) {
// 		return false;
// 	}
// 	// Comprobar si el número es divisible por algún número menor que él mismo
// 	for (let i = 2; i < numero; i++) {
// 		if (numero % i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function esPar(numero) {
// 	if (numero % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function saludar() {
// 	return 'Hola mundo!!';
// }

// -----------------------------------------------------------------------------------------------------

// imprimir cada valor del siguiente array multiplicado
// x2 utilizando map

// const numeros = [10, 500, 1500, 2000];

// salida -> [ 20, 1000, 3000, 4000 ]

// 1- crear array solo con los clientes que tengan el status en true, usar filter
// 2 - crear funcion flecha que permite buscar un cliente por el nombre, usar find
// 3 - agregar un cliente utilizado push
// const clientes = [
// 	{ id: 12, nombre: 'Pedro', status: false },
// 	{ id: 13, nombre: 'Sofia', status: true },
// 	{ id: 14, nombre: 'Almendra', status: false },
// 	{ id: 15, nombre: 'Carlos', status: true },
// ];

// DENTRO DE LA CARPETA DATA tiene un js que contiene un listado de usuario y un ejercicio,
// importarlo y utilizar la funcion creada
