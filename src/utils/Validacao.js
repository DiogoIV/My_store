

/* validacao ao enviar*/


export function validarRegistro(
    nome,
    email,
    senha,
    confirmarSenha
) {

   const valores = {
        nome: nome === '' ?  ' ⚠ Campo obrigatório': null,
        email: email === '' ? '⚠ campo obrigatório': null,
        senha: senha === '' ? '⚠ campo obrigatório' : null,
        confirmarSenha: confirmarSenha === '' ? '⚠ campo obrigatório' : null,
        validarSenha: senha !== confirmarSenha ? '⚠ Senhas não conscidem' : null

   }

    return valores

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