const contenido = document.getElementById("produAlimentos")
const carritoconten = document.getElementById("Aparienciacart")
let carrito = [];

alimentos.forEach((alimento, indice)=>{
    let balanceados = document.createElement("div");
    balanceados.setAttribute('id','AlimentosDiv','GuafAlimento')
    balanceados.innerHTML = `
                    <div class= "cardCarro">
                    <img src="${alimento.imagen}" alt="${alimento.nombre}">
                    <div class="detalles-carro">
                    <p class="tituloAlimentos"> ${alimento.nombre}</p>
                    <p class="Precios">$${alimento.precio}</p> 
                    <button class="botoncomprar btn btn-outline-light" onClick='comprar(${indice});alert();'>Comprar</button>
                    </div>
                    </div>
    
    `
   contenido.appendChild(balanceados)
})

 const comprar = (indice)=>{
    
    const clicked = carrito.findIndex((repetido)=>{
        return repetido.id === alimentos[indice].id;
        
    });
    if (clicked === -1){
        const alimentoAdd = alimentos[indice];
        alimentoAdd.cantidad = 1
        carrito.push(alimentoAdd);
        freshsotrage()
        console.log(carrito)
        /* aparicion */
    }
    else{
        carrito[clicked].cantidad +1;
        /* aparicion() */
        freshsotrage()
    }
}
const alert= ()=>{
    Swal.fire(
        'Buena decision!',
        'Has añadido este producto a tu carrito!',
        'success'
    )
}
const freshsotrage=((carrito)=>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
})
/* carrito.forEach((alimento,indice)=>{
    carritoAl = document.createElement("div")
    carritoAl.setAttribute('id', 'carritoS')
    

}) */
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
    carritoAl()
    console.log(carrito)
}



 




















