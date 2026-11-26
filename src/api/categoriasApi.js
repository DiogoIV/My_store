
async function pegarCategorias() {

    
    const res = await fetch(`${API_URL}/auth/categorias`
)

    const dados = await res.json()

   

    return dados.categoria



}

export default pegarCategorias