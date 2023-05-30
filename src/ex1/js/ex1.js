console.log("connected");
/*
* Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.

* Conectar archivo javascript al html de destino
* Imprimir Hello Javascript! en nuestra ventana del navegador
* * definir el contenedor o espacio que va a ocupar el mensaje Hello JS
* * acceder al contenedor desde javascript
* * crear el mensaje
* * insertar en el contenedor
* * imprimirlo en pantalla
*/


const title = 'Hello JavaScript'

function getElement () {
    let sectionEx1 = document .getElementById('ex1')
    console.log(divEx1)
}

function render (text) {
    let section = getElement() ;
    section.innerHTML = '<h1>${text}<h1>'
}
