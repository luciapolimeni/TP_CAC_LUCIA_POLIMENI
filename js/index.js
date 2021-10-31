window.addEventListener('load', ()=> {
  const form = document.querySelector('#formulario')
  const usuario = document.getElementById('usuario')
  const email = document.getElementById('email')
  const celular = document.getElementById('celular')


  form.addEventListener('submit', (e) => {
      e.preventDefault()
      validaCampos()
  })
  
  const validaCampos = ()=> {
      //capturar los valores ingresados por el usuario
      const usuarioValor = usuario.value.trim()
      const emailValor = email.value.trim()
      const celularValor = celular.value.trim()

   
      //validando campo usuario
      //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
      if(!usuarioValor){
          //console.log('CAMPO VACIO')
          validaFalla(usuario, 'Campo vacío')
      }else{
          validaOk(usuario)
      }

      //validando campo email
      if(!emailValor){
          validaFalla(email, 'Campo vacío')            
      }else if(!validaEmail(emailValor)) {
          validaFalla(email, 'El e-mail no es válido')
      }else {
          validaOk(email)
      }
      
      //validando campo celular
      if(!celularValor){
        validaFalla(celular, 'Campo vacío')            
      }else if(!validaCelular(celularValor)) {
        validaFalla(celular, 'El celular no es válido.')
      }else {
        validaOk(celular)
    }

  }

  const validaFalla = (input, msje) => {
      const formControl = input.parentElement
      const aviso = formControl.querySelector('p')
      aviso.innerText = msje
      aviso.style.backgroundColor = "Violet";
      aviso.style.color = "white";
     formControl.className = 'form-control falla'
  }
  const validaOk = (input, msje) => {
      const formControl = input.parentElement
      formControl.className = 'form-control ok'
     
  }

  const validaEmail = (email) => {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
  }

  const validaCelular = (celular) => {
      return /^[0-9]$/.test(celular)
    ;        
}
})