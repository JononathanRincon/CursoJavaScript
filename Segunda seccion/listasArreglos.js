// listas, array o arreglo
const lista1 = [1, "hola", true, undefined,null];
const lista2 = new Array(2, "hola", true, undefined,null);
const lista3 = new Array(3);
lista3[0] = "hola soy el primer elemento de la lista, index 0";
const lista4 = [lista1, lista2, lista3];
console.log(lista1);
console.log(lista2);
console.log(lista3);

const movil = {
    altura:10,
    anchura:5,
    marca:"xiomi",
    iswhite:true,
    constactos:["Gorka","martin","Raul"],
    tarjeta:{
        marca:"sandisk",
        almacenamiento: 32
    }
}
movil.anyo = 2019;

console.log(movil.tarjeta.marca);
const fecha = new Date();

//fechas
 const dia = fecha.getDate();
 const mes = fecha.getMonth()+1;
 const year = fecha.getFullYear();

 console.log(dia, mes, year);


