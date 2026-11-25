
async function pegarCategorias() {

    
    const res = await fetch('http://localhost:3000/categorias')

    const dados = await res.json()

   

    return dados.categoria



}

export default pegarCategorias