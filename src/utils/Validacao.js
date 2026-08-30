

/* validacao ao enviar*/

const Regexs = {
    nome: /^(?:\p{L}{2,})(?:\s+\p{L}{2,})/u,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    senha: /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[^A-Z-a-z0-9])\S{8,}$/
}




function validarRegistro(
    nome,
    email,
    senha,
    confirmarSenha
) {

    const valores = {
        nome: nome === '' ? ' ⚠ Campo obrigatório' : null || !Regexs.nome.test(nome) ? ' ⚠ Formato de nome inválido' : null,

        email: email === '' ? '⚠ campo obrigatório' : null || !Regexs.email.test(email) ? '⚠ E-mail inválido (ex: nome@email.com)' : null,

        senha: senha === '' ? '⚠ campo obrigatório' : null || !Regexs.senha.test(senha) ? ' ⚠ Mín. 8 caracteres, letra, número e símbolo' : null,
        confirmarSenha: confirmarSenha === '' ? '⚠ campo obrigatório' : null,
        validarSenha: senha !== confirmarSenha ? '⚠ Senhas não conscidem' : null

    }

    return valores

}



function ValidarLogin(email, senha) {
    const validacaoLogin = {
        email: email === '' ? '⚠ Campo obrigatório' : !Regexs.email.test(email) ? '⚠ E-mail inválido (ex: nome@email.com)' : null,

        senha: senha === '' ? ' ⚠ Campo obrigatório' : null 
    }

    return validacaoLogin
}

function validarEsqueciSenha(email) {

    if (email === '') {
        return 'Campo obrigatório'
    } 

    if(Regexs.email.test(!email)) {
        return 'Formato de email inválido'
    }

    return null
}


export {validarRegistro, ValidarLogin, validarEsqueciSenha}


