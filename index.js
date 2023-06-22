const mailButton = document.querySelector('#emailSet')
const acaTeContactamos = document.getElementById('teContactaremos')
/* Asigno evento al boton de registrar email */
mailButton.addEventListener('click', pushEmail)




/* Alerta de Todo bien */
const alertaSuccess=()=>{
    Swal.fire(
        'Excelente!',
        'Has Registrado tu Mail de contacto de manera exitosa',
        'success'
      )
}
/* Seteamos el Email en el LS */
function pushEmail(){
  
    const Mail = document.querySelector('#exampleInputEmail1').value;
    
    localStorage.setItem('tuMail', JSON.stringify(Mail))
    tuEmail.push(localStorage.getItem('tuMail'))

    
    
}
/* Declaro el mail vacio */
const tuEmail = []









