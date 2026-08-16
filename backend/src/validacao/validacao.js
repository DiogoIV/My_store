
const regex = {
    nome: /^(?:\p{L}+)(?:\s+\p{L}+)*$/u,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    senha: /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[^A-Za-z0-9])\S{8,}$/
}


function validarEmail(email) {

}