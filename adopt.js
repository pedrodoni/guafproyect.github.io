const adoptar = document.getElementById("adopts")
const tramite = document.getElementById("tramita")
const contactar = document.getElementById("contactar")

DibujarFLia()





function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('familia')){
        familia = JSON.parse(localStorage.getItem('familia'))
        sumarFlia()
    }})

contactar.addEventListener('click',()=>{
    if(JSON.parse(localStorage.getItem('tuMail')) === null){
        Swal.fire({
            icon: 'error',
            title: 'Guaf?...',
            text: 'Debes registrar tu email antes!',
            footer: '<a href="../index.html">Registra tu Mail aqui</a>'
          })
    }
    else{
    Swal.fire
    (`Estaremos en contacto a su mail ${JSON.parse(localStorage.getItem('tuMail'))}, su numero en la fila es:`,
        `${getRandomInt(20)} 
        `)
    familia.length= 0
    localStorage.setItem('familia', JSON.stringify(familia))
    sumarFlia()
    }
    
} )
/* Declaro Array Carrito adopcion */
let familia = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('familia')){
        familia = JSON.parse(localStorage.getItem('familia'))
       
    }
})
async function DibujarFLia(){
const response = await fetch('../json/adopcion.json')
const perros = await response.json ()


    perros.forEach((mascota)=>{ 
        let mascotas = document.createElement("div")
        mascotas.setAttribute('id', 'adoptame')
        mascotas.innerHTML=`<img src="${mascota.imagen}" alt="${mascota.id}">
        <h3 id="gender">Genero: ${mascota.gender}</h3>
        <h3 id="age">Edad: ${mascota.edad}</h3>
        <button id= "adopt${mascota.id}" onClick='alertaFlia()' class="btn btn-outline-light">Solicitar mas Informacion</button>
        `
        adoptar.appendChild(mascotas)

        const boton = document.getElementById(`adopt${mascota.id}`)
        boton.addEventListener('click',()=>{
            sumarAFlia(mascota.id)
        })
        const sumarAFlia = (perroId)=>{
            const P = perros.find((perro)=>perro.id===perroId)
            familia.push(P)
            sumarFlia()
        } 
    })
}


const alertaFlia=()=>{
    Swal.fire(
        'Te hara feliz? TE LO ASEGURO!',
        '',
        'success'
      )
}
const sumarFlia=()=>{
    tramite.innerHTML = ""

    familia.forEach((mascot)=>{
        const mascotas = document.createElement('div')
        mascotas.setAttribute('id','dscrp')
        mascotas.innerHTML=`
        <img class="mascotaInModal" src="${mascot.imagen}">
        <h2 class= "details2">${mascot.gender}</h2>
        <h2 class= "details2">${mascot.edad}</h2>
        <h3 class= "details2">Desparasitada? ${mascot.desparasitada}</h3>
        <h3 class= "details2">Medicada? ${mascot.medicada}</h3>
        <h4 class="text-details">${mascot.descript}</h4>
        <button onclick= "alertTriste();eliminar(${mascot.id})" class="delete2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paw-off" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M11.168 11.154c-.71 .31 -1.184 1.107 -2 2.593c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c.927 0 1.664 -.689 1.783 -1.708" />
        <path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052h0z" />
        <path d="M11 6.992a3.608 3.608 0 0 0 -.04 -.725c-.203 -1.297 -1.047 -2.267 -1.932 -2.267a1.237 1.237 0 0 0 -.758 .265" />
        <path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z" />
        <path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z" />
        <path d="M3 3l18 18" />
      </svg></button>
      `
        tramite.appendChild(mascotas)
        localStorage.setItem('familia', JSON.stringify(familia))
    })
}
const eliminar = (perroId)=>{
    localStorage.getItem('familia')
    const P = familia.find((flia)=>flia.id===perroId)
    const index = familia.indexOf(P)
    familia.splice(index, 1)
    sumarFlia()
    localStorage.setItem('familia', JSON.stringify(familia))

    
}

const alertTriste=()=>{
    Swal.fire(
        'Mala decision!',
        'Me vas a dejar en la calle?',
        'error'
    )
}

