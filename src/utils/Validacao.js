

/* validacao ao enviar*/


export function validarRegistro(
    nome,
    email,
    senha,
    confirmarSenha
) {
    if (!nome) return 'Preencha o nome'
    if (!email) return 'Preencha o e-mail'
    if (!senha) return 'Preencha a senha'
    if (!confirmarSenha) return 'Confirme a senha'
    if (senha !== confirmarSenha) return 'As senhas não coincidem'

    return ''
}

export function ValidarEmail (email) {
    if(!email) {
        return false
    }
    return true
}

export function ValidarSenha (senha) {
    if(!senha) {
        return false
    }

    return true
}