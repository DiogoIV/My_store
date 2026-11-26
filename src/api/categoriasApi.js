const API_URL = import.meta.env.VITE_API_URL;

async function pegarCategorias() {

    
    const res = await fetch(`${API_URL}/categorias`
)

    const dados = await res.json()

   

    return dados.categoria



}

export default pegarCategorias