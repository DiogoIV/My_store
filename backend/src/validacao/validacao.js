
const regex = {
    nome: /^(?:\p{L}+)(?:\s+\p{L}+)*$/u,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    senha: /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[^A-Za-z0-9])\S{8,}$/
}

function validarNome (nome) {

    if (!regex.nome.test(nome)) {
        return 'Formato de nome invalido'
    }

    return null    
}

function validarEmail (email) {

    if(!regex.email.test(email)) {

        return 'Formato de email invalido'

    }

    return null
}

function validarSenha (senha) {

    if(!regex.senha.test(senha)) {
        return 'Formato de senha invalido'
    }

    return null
}

export {validarNome, validarEmail, validarSenha} 


    

    

    
 
