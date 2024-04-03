function maskNumberCel(event) {
    let phoneNumber = event.target.value;

    phoneNumber = phoneNumber.replace(/\D/g, '');

    phoneNumber = phoneNumber.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})$/, '($1)$2-$3');

    event.target.value = phoneNumber;
}

function maskNumberTel(event) {
    let phoneNumber = event.target.value;

    phoneNumber = phoneNumber.replace(/\D/g, '');

    phoneNumber = phoneNumber.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})$/, '($1)$2-$3');

    event.target.value = phoneNumber;
}

function validateDateCadastro() {
    var inputDate = document.getElementById("data_cadastro").value;
    var currentDate = new Date().toISOString().split('T')[0];
    
    if (inputDate > currentDate) {
        alert("A data de cadastro não pode ser maior que a data atual.");
        document.getElementById("data_cadastro").value = null;
        return;
    }
}

function validateDateNascimento() {
    var inputDate = document.getElementById("data_nascimento").value;
    var currentDate = new Date().toISOString().split('T')[0];
    
    if (inputDate > currentDate) {
        alert("A data de Nascimento não pode ser maior que a data atual.");
        document.getElementById("data_nascimento").value = null;
        return;
    }
}

function maskCEP(event) {
    let cep = event.target.value;

    cep = cep.replace(/\D/g, '');

    cep = cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');

    event.target.value = cep;
}