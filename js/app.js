document.addEventListener('DOMContentLoaded', function(){
    botonBlack = document.getElementById('img-black')
    img1 = document.getElementsByClassName('img1')[0]
    img2 = document.getElementsByClassName('img2')[0]
    img3 = document.getElementsByClassName('img3')[0]

    botonBlack.addEventListener('click', function(){
        img1.style.zIndex = '3';
        img2.style.zIndex = '2';
        img3.style.zIndex = '1';
    })
})

document.addEventListener('DOMContentLoaded', function(){
    botonBlue = document.getElementById('img-blue')
    img1 = document.getElementsByClassName('img1')[0]
    img2 = document.getElementsByClassName('img2')[0]
    img3 = document.getElementsByClassName('img3')[0]

    botonBlue.addEventListener('click', function(){
        img1.style.zIndex = '1';
        img2.style.zIndex = '2';
        img3.style.zIndex = '3';
    })
})

document.addEventListener('DOMContentLoaded', function(){
    botonWhite = document.getElementById('img-white')
    img1 = document.getElementsByClassName('img1')[0]
    img2 = document.getElementsByClassName('img2')[0]
    img3 = document.getElementsByClassName('img3')[0]

    botonWhite.addEventListener('click', function(){
        img1.style.zIndex = '1';
        img2.style.zIndex = '3';
        img3.style.zIndex = '2';
    })
})

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var comentario = document.getElementById('comentario').value;

    if (nombre.trim() == '' || correo.trim() == '' || comentario.trim() == '') {
      alert('Por favor, complete todos los campos.');
      return false;
    }

    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert('Por favor, introduzca una dirección de correo electrónico válida.');
      return false;
    }

    // Si todo está bien, se puede enviar el formulario
    alert('¡Formulario enviado con éxito!');
    return true;
  }
