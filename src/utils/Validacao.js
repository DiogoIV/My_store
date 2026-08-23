

/* validacao ao enviar*/

const Regexs = {
    nome: /^(?:\p{L}{2,})(?:\s+\p{L}{2,})*/u,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    senha: /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[^A-Z-a-z0-9])\S{8,}$/
}




export function validarRegistro(
    nome,
    email,
    senha,
    confirmarSenha
) {

    const valores = {
        nome: nome === '' ? ' ⚠ Campo obrigatório' : null || !Regexs.nome.test(nome) ? ' ⚠ Formato de nome inválido': null,

        email: email === '' ? '⚠ campo obrigatório' : null || !Regexs.email.test(email) ? '⚠ E-mail inválido (ex: nome@email.com)': null,
        
        senha: senha === '' ? '⚠ campo obrigatório' : null || !Regexs.senha.test(senha) ? ' ⚠ Mín. 8 caracteres, letra, número e símbolo': null,
        confirmarSenha: confirmarSenha === '' ? '⚠ campo obrigatório' : null,
        validarSenha: senha !== confirmarSenha ? '⚠ Senhas não conscidem' : null

    }

    return valores

}






export function ValidarEmail(email) {
    if (!email) {
        return false
    }
    return true
}

export function ValidarSenha(senha) {
    if (!senha) {
        return false
    }

    return true
}