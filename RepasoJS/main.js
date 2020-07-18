var nombre = "Norlan Matute";
var altura = 162;
/*var concatenacion = nombre + " " + altura;



if(altura >= 190){
    datos.innerHTML += '<h1>Eres una persona alta</h1>';
}else{
    datos.innerHTML += '<h1>Eres una persona baja</h1>';
}

for(var i = 2000; i <= 2020; i++){
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}*/

function MuestraMiNombre(nombre, altura) {
    /*var datos = document.getElementById("datos");
    datos.innerHTML = `*/
    var misDatos = `
        <h1>Caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura}</h3>
`;

    return misDatos;

}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Norlan Matute", 162);
}

imprimir();

var nombres = ['Norlan', 'Daniel', 'Jose'];

/*document.write('<h1>Listado de nombres.</h1>');
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}*/

/*nombres.forEach(function(nombre){
    document.write(nombre + '<br/>');*/

nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});

var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modleo, this.maxima, this.antiguedad);
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>" + coche.modelo + "</h1>")
coche.mostrarDatos();
console.log(coche);

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Bienvenidos a Eliseos";
        saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(error => {
    alert(error);
});