
/*Criar Conta*/

async function Register(dadosRegister) {

    try {
        const res = await fetch('http://localhost:3000/register', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome: dadosRegister.nome,
                email: dadosRegister.email,
                senha: dadosRegister.senha,
                confirmarSenha: dadosRegister.confirmarSenha
            })
        })

        const dados = await res.json()

        if(res.ok) {
            return dados.mensagem || 'Registrado com Sucesso!'
        } else {
            return dados.mensagem || 'Erro ao realizar Cadastro'
        }


    } catch (error) {
        console.error("Falha na requisição:", error)
        throw error
    }
    


}

export default Register