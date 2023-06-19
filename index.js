const mailButton = document.querySelector('#emailSet')
const acaTeContactamos = document.getElementById('teContactaremos')

mailButton.addEventListener('click', pushEmail)

const alertaSuccess=()=>{
    Swal.fire(
        'Excelente!',
        'Has Registrado tu Mail de contacto de manera exitosa',
        'success'
      )
}
function pushEmail(){
  
    const Mail = document.querySelector('#exampleInputEmail1').value;
    
    localStorage.setItem('tuMail', JSON.stringify(Mail))
    tuEmail.push(localStorage.getItem('tuMail'))

    
    
}
const tuEmail = []









