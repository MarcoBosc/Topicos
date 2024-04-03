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

function maskDateCadastro() {
    var inputDate = document.getElementById("data_cadastro").value;
    var currentDate = new Date().toISOString().split('T')[0];

    if (inputDate > currentDate) {
        alert("A data de cadastro não pode ser maior que a data atual.");
        document.getElementById("data_cadastro").value = null;
        return;
    }
}

function maskDateNascimento() {
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

function maskCPFCNPJ(input) {
    var value = input.value.replace(/\D/g, '');

    if (value.length <= 11) {
        input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        let isValid = validateCPF(input.value);
        if (!isValid) {
            input.style.borderColor = 'red';
        }
        if (isValid) {
            input.style.borderColor = 'gray';
        }
    } else {
        input.value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        let isValid = validateCNPJ(input.value);
        if (!isValid) {
            input.style.borderColor = 'red';
        }
        if (isValid) {
            input.style.borderColor = 'gray';
        }
    }
}

const validateCPF = (cpf) => {
    const cpfClean = cpf.replace(/[^\d]/g, '');

    if (cpfClean.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(cpfClean)) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpfClean.charAt(i)) * (10 - i);
    }
    let remainder = sum % 11;
    let digit1 = remainder < 2 ? 0 : 11 - remainder;

    if (parseInt(cpfClean.charAt(9)) !== digit1) {
        return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpfClean.charAt(i)) * (11 - i);
    }
    remainder = sum % 11;
    let digit2 = remainder < 2 ? 0 : 11 - remainder;

    if (parseInt(cpfClean.charAt(10)) !== digit2) {
        return false;
    }

    return true;
}

const validateCNPJ = (cnpj) => {
    const cnpjClean = cnpj.replace(/[^\d]/g, '');

    if (cnpjClean.length !== 14) {
        return false;
    }

    let sum = 0;
    let factor = 5;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(cnpjClean.charAt(i)) * factor;
        factor = factor === 2 ? 9 : factor - 1;
    }
    let remainder = sum % 11;
    let digit1 = remainder < 2 ? 0 : 11 - remainder;

    if (parseInt(cnpjClean.charAt(12)) !== digit1) {
        return false;
    }


    sum = 0;
    factor = 6;
    for (let i = 0; i < 13; i++) {
        sum += parseInt(cnpjClean.charAt(i)) * factor;
        factor = factor === 2 ? 9 : factor - 1;
    }
    remainder = sum % 11;
    let digit2 = remainder < 2 ? 0 : 11 - remainder;

    if (parseInt(cnpjClean.charAt(13)) !== digit2) {
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const cpf_cnpj = document.getElementById('cpf_cnpj').value;
        const data_nascimento = document.getElementById('data_nascimento').value;
        const endereco = document.getElementById('endereco').value;
        const bairro = document.getElementById('bairro').value;
        const cep = document.getElementById('cep').value;
        const data_cadastro = document.getElementById('data_cadastro').value;
        const municipio = document.getElementById('municipio').value;
        const telefone = document.getElementById('telefone').value;
        const celular = document.getElementById('celular').value;
        const uf = document.getElementById('estado').value;

        console.log(nome, cpf_cnpj, data_nascimento, endereco, bairro, cep, data_cadastro, municipio, telefone, celular, uf);
        let isValidCpf = validateCPF(cpf_cnpj)
        let isValidCNPJ = validateCNPJ(cpf_cnpj)
        if(!isValidCpf && !isValidCNPJ || nome === '' || cpf_cnpj === '' 
        || data_nascimento === '' || endereco === '' || celular === ''){
            alert("Confira os campos e tente novamente")  
            return 
        }
        alert(`Usuário ${nome} cadastrado com sucesso!`) 
    });
});