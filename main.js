let alimentos = [
    {
        id: 1,
        nombre: "Guaf Alimento balanceado 10 kg",
        precio: 3500,
        imagen: "../images/guaf.png"
    },
    {
        id: 2,
        nombre: "Dog Chow alimento 10kg",
        precio: 6500,
        imagen: "../images/dogChow.png"
    },
    {
        id: 3,
        nombre: "Dog Selection alimento 10kg",
        precio: 7600,
        imagen: "../images/dogSelection.png"
    }
];
const exhibir = document.getElementById("produAlimentos")
alimentos.forEach((alimento, indice) => { 
    let show = document.createElement("div")
    show.classList.add("GuafAlimento" , "AlimentosDiv")
    show.innerHTML = 
    ` <img src="${alimento.imagen}" alt="Guaf Alimento">
    <div>
    <p class="tituloAlimentos"> ${alimento.nombre}</p>
    <p class="Precios">$${alimento.precio}</p> 
    <a href="#carrito" class="btn btn-outline-light" onClick="AddCarrito(${indice})">Añadir al carrito</a>
    </div>`
    exhibir.appendChild(show)
  
});

const AddCarrito= ()=>{
    Swal.fire(
        'Buena decision!',
        'Has añadido este producto a tu carrito!',
        'success'
    )
}