//Crea un archivo JS que contenga las siguientes líneas
//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const elementosCompra = [
  {
    Cod: 1215,
    Descripcion: "Protex",
    precio: 3200
  },
  {
    Cod: 1216,
    Descripcion: "jabon Polvo",
    precio: 8300
  },
  {
    Cod: 1217,
    Descripcion: "cloro",
    precio: 2100
  },
  {
    Cod: 1218,
    Descripcion: "esponja",
    precio: 1450
  }
];
//- Modifica la lista de la compra y añádele "Aceite de Girasol"
elementosCompra.push({
    Cod: 1219,
    Descripcion: "Aceite de girasol",
    precio: 18000
});

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
elementosCompra.pop();

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [{
    nombre: "Looney Tunes",
    director:"Chuck Jones",
    fecha:"2001/9/22",
},{
    nombre:"El Sorprendente Hombre Araña 2",
    director:"Jonathan Blanco",
    fecha:"2014/01/20"
},{
    nombre:"Las Tortugas Ninja",
    director:"Jonathan Liebesman",
    fecha:"2014/04/09"
}];
//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const Peliculas2010 = peliculasFavoritas.filter(el => el.fecha > "2010/1/1");
//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const ListaDirectores = peliculasFavoritas.map(
    (valor, indice) => `${indice + 1} - ${valor.director}`
);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const ListaTitulos = peliculasFavoritas.map(
    (valor, indice) => `${indice + 1} - ${valor.nombre}`
);
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const ListaConcat = ListaDirectores.concat(ListaTitulos);
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const lista4 = [...ListaDirectores, ...ListaTitulos]
console.log(lista4);
