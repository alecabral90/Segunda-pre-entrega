
function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }

}

let productoA = new Producto("Torta", 2000, 10)
let productoB = new Producto("Desayuno", 3000, 5)
let productoC = new Producto("Picada", 4000, 7)
let productoD = new Producto("Cositapaki", 4000, 0)

let precioTotal = 0

let listaDeProductos = [productoA, productoB, productoC,productoD]

let listadisponibles = listaDeProductos.filter((prod) => prod.stock > 0)

let listanombres = listadisponibles.map((prod) => prod.nombre)

let opcion = prompt("Bienvenidos a pedidos Paki Cake, escriba lo que desea comprar:\n- " + listanombres.join("\n - "))

function multi(a, b){
    return a * b;
 }



alert("ingreso  "+ opcion + "  como opcion") 

alert("ingreso  "+ opcion + "  como opcion") 

while(opcion.toUpperCase() != 'S') {
    
    if(opcion.toUpperCase() == 'TORTA'){
        let cantidadProductoA = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:")
        if(cantidadProductoA <= productoA.stock){
            precioTorta = multi (cantidadProductoA, productoA.precio)
            precioTotal = precioTotal + precioTorta

            alert("el precio es  " + precioTorta)
        }

        else{
            alert("Actualmente tenemos " + productoA.stock + " unidades de este producto")
        }
    }
    else if(opcion.toUpperCase() == 'DESAYUNO'){
        let cantidadProductoB = parseInt(prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:"))
        if(cantidadProductoB <= productoB.stock){
            precioDesayuno =  multi(cantidadProductoB , productoB.precio)
            precioTotal = precioTotal + precioDesayuno
            alert("el precio es  " + precioDesayuno)
        }
        else{
            alert("Actualmente tenemos " + productoB.stock + " unidades de este producto")
        }
    }
    else if(opcion.toUpperCase() == 'PICADA'){
        let cantidadProductoC = parseInt(prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:"))
        if(cantidadProductoC <= productoC.stock){
            precioPicada = multi (cantidadProductoC , productoC.precio)
            precioTotal = precioTotal + precioPicada
            alert("el precio es   " + precioPicada)
        }
        else{
            alert("Actualmente tenemos " + productoC.stock + " unidades de este producto")
        }
    }
    else if(opcion.toUpperCase() == 'COSITAPAKI'){
         let cantidadProductoD = parseInt(prompt("ingrese que cantidad de " + productoD.nombre + " desea comprar:"))
         if(cantidadProductoD <= productoD.stock){
            precioCosita = multi (cantidadProductoD , productoD.precio)
             precioTotal = precioTotal + precioCosita
             alert("el precio es   " + precioCosita)
         }
         else{
             alert("Actualmente tenemos " + productoD.stock + " unidades de este producto")
         }
    
    }
    else{
        alert("No tenemos ese producto a la venta, nuestros productos son:\n- " + listanombres.join("\n - "))
    }
    opcion = prompt("Ingrese que producto quiere comprar:\n-" + listanombres.join("\n- ") + "\n-Escriba 'S' para salir")
}
if(precioTotal != 0){
    alert("El precio total a pagar es : "+ "$" + precioTotal)
}
else{
    alert("gracias por su visita")
    
}