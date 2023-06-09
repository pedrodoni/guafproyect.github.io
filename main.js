const contenido = document.getElementById("produAlimentos")

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
    
    const elegido = carrito.findIndex((repetido)=>{
        return repetido.id === alimentos[indice].id
        
    })
    if (elegido === -1){
        const alimentoAdd = alimentos[indice];
        alimentoAdd.cantidad = 1
        carrito.push(alimentoAdd)
        /* aparicion */()
    }
    else{
        carrito[elegido].cantidad +=1;
        /* aparicion() */
    }
}
const alert= ()=>{
    Swal.fire(
        'Buena decision!',
        'Has añadido este producto a tu carrito!',
        'success'
    )
}



 




















