
/*Criar Conta*/

async function Cadastro(dadosRegister) {

    try {

        const res = await fetch('http://localhost:3000/auth/cadastro', {
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



        if (res.ok) {

            return {
                mensagem: dados.mensagem || 'Registrado com Sucesso!',
                campo: dados.campo,
                tipo: 'sucesso'
            }


        } else {

            return {
                mensagem: dados.mensagem || 'Erro ao realizar cadastro',
                campo: dados.campo,
                tipo: 'erro'
            }
        }

        

    } catch (error) {
        console.error("Falha na requisição:", error)

        return {
            mensagem: 'Erro ao conectar com o servidor',     
            tipo: 'erro'
        }

    }



}

/*Logar*/

async function Logar(dadosLogin) {

    const res = await fetch('http://localhost:3000/auth/login', {

        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({

            email: dadosLogin.email,
            senha: dadosLogin.senha

        })
    })
    
    const dados = await res.json()

    const resposta =  {
        ok: res.ok,
        campo: dados.campo,
        mensagem: dados.mensagem
    }

    return resposta
    
}



export  {Logar, Cadastro}