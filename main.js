let carrito = []
const contieneProductos = document.getElementById("produAlimentos")
const clearCart = document.getElementById("limpiar")
const displayCarrito = document.getElementById("aparienciaCart")
const total = document.getElementById("totalCart")
const alert= ()=>{
    Swal.fire(
        'Buena decision!',
        'Has añadido este producto a tu carrito!',
        'success'
    )
}
clearCart.addEventListener('click',()=>{
    carrito.length = 0
    freshCarrito()
})

alimentos.forEach((alimento)=>{
    let alimentoBalanceado = document.createElement("div");
    alimentoBalanceado.setAttribute('id','AlimentosDiv')
    alimentoBalanceado.innerHTML=`<div class= "cardCarro">
    <img src="${alimento.imagen}" alt="${alimento.nombre}">
    <div class="detalles-carro">
    <p class="tituloAlimentos"> ${alimento.nombre}</p>
    <p class="Precios">$${alimento.precio}</p> 
    <button id= "add${alimento.id}" class="botoncomprar btn btn-outline-light" onClick='alert();'>Comprar</button>
    </div>
    </div>`
    contieneProductos.appendChild(alimentoBalanceado)

    const button = document.getElementById(`add${alimento.id}`)

    button.addEventListener('click',()=>{
        addCarrito(alimento.id)
    }
    )
})
const addCarrito = (alimentId) => {
    const D = alimentos.find((aliment)=> aliment.id === alimentId)
    carrito.push(D)
    freshCarrito()
   
    
}

const freshCarrito=()=>{
    displayCarrito.innerHTML = ""


    carrito.forEach((aliment)=>{
        const alimentoBalanceado = document.createElement('div')
        alimentoBalanceado.setAttribute('id','aparienciaCarrito')
        alimentoBalanceado.innerHTML=`
        <img src="${aliment.imagen}" alt="${aliment.nombre}">
        <h3>${aliment.nombre}</h3>
        <h4>${aliment.precio}</h4>
        <h5>Cantidad: ${aliment.cantidad}</h5>
        <button onclick= "eliminar(${aliment.id})" class="delete"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-off" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 3l18 18" />
        <path d="M4 7h3m4 0h9" />
        <path d="M10 11l0 6" />
        <path d="M14 14l0 3" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923" />
        <path d="M18.384 14.373l.616 -7.373" />
        <path d="M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
      </svg></button>`

      displayCarrito.appendChild(alimentoBalanceado)
    })
   
}
const eliminar = (alimentID)=>{
    const D = alimentos.find((aliment)=> aliment.id === alimentID)
    const index = carrito.indexOf(D)
    carrito.splice(index, 1)
    freshCarrito()
}
 