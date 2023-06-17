$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

function submitForm() {
    // Prevenir comportamiento predeterminado del envío del formulario
    event.preventDefault();

    // Obtener valores de los campos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Aquí realizarías la lógica para enviar los datos del formulario a tu servidor

    // Mostrar mensaje de éxito
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    successMessage.innerHTML = "¡Tu mensaje ha sido enviado exitosamente!";

    // Restablecer los valores de los campos del formulario
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Ocultar el mensaje emergente después de 3 segundos
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 5000);
}


window.addEventListener('load', () => {
    anime({
      targets: '.container',
      translateX: ['100%', '0'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo'
    });
  });