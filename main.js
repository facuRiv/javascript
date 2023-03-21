
let Remera = 500
let Pantalon = 1200
let total = 500 + 1200

function solicitarProducto() {

    let producto = prompt('Ingrese producto "Remera"');
    while (producto != 'Remera')
        if (producto != 'Remera') {
            alert('Vuelva a intentarlo')
            producto = prompt('Ingrese producto "Remera"')
        }
}
function solicitarProducto2() {

    let producto2 = prompt('Ingrese producto "Pantalon"');
    while (producto2 != 'Pantalon')
        if (producto2 != 'Pantalon') {
            alert('Vuelva a intentarlo')
            producto2 = prompt('Ingrese producto "Pantalon"')
        }
}
function precioTotal() {
    let total = Remera + Pantalon
    alert ('El precio total es de '+ total)
}

solicitarProducto ()
solicitarProducto2 ()
precioTotal ()







