$('.slider-main').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,

});
function validarEmail() {
    var email =
        document.querySelector('#email');
    var error = document.querySelector('#error-email');

    if (!email.checkValidity()) {
        error.innerHTML = "Email inválido";
    }

}
function redefinirMsg() {
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Email invalido") {
        error.innerHTML = "";
    }
}

function mascara_cpf() {
    var cpf = document.getElementById('cpf')
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    } else if (cpf.value.length == 11) {
        cpf.value += "-"
    }
}
<<<<<<< HEAD

=======
// function mascara_fone() {
//     const text = fone.value
//     const isCelular = text.length === 9;

//     let changedText

//     if(isCelular){
//         const parte1 = changedText.slide(0,5)
//     }
// }
>>>>>>> 3f0878cd2eed4c77b531ce17fc5604aaa8475f3e
function mascara_fone() {
    var fone = document.getElementById('fone')
    if (fone.value.length == 2) {
        fone.value += " "
<<<<<<< HEAD
    } else if (fone.value.length == 9) {
        fone.value += "-"
    }
}

=======
    } else if (fone.value.length == 8) {
        fone.value += "-"
    }
}
>>>>>>> 3f0878cd2eed4c77b531ce17fc5604aaa8475f3e
