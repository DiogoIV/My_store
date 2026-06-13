import { useState } from "react";
import { alecrim, jasmim, lavandas, papoulas } from '../../assets/imagens/produtos/flores'
import { FaPlus, FaMinus, FaRegTrashCan } from '../../assets/icons'

import './Cart.css'
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";



function Cart() {
    const frete = 15

    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: "Alecrim",
            imagem: alecrim,
            preco: 19.90,
            quantidade: 1,


        },

        {
            id: 2,
            nome: "Jasmim",
            imagem: jasmim,
            preco: 24.90,
            quantidade: 1

        },

        {
            id: 3,
            nome: "Lavanda",
            imagem: lavandas,
            preco: 22.90,
            quantidade: 1

        }
    ])

    /*quantidade*/

    function aumentarQuantidade(ID) {
        const aumentarProdutos = produtos.map(produto => {

            if (produto.id == ID) {
                console.log(produto)
                return {
                    ...produto,
                    quantidade: produto.quantidade + 1
                }
            }

            return produto
        })

        return setProdutos(aumentarProdutos)
    }

    function diminuirQuantidade(ID) {
        const diminuirProduto = produtos.map(produto => {
            if(produto.id === ID) {
                
                return {
                    ...produto,
                    quantidade: Math.max(produto.quantidade - 1, 1)

                
                }
            }

            return produto
        })

        return setProdutos(diminuirProduto)
    }
    /* remover intems */
    function removerIntems(ID) {

        const intemRemovido = produtos.filter(el => el.id !== ID)

        return setProdutos(intemRemovido)
    }

    const produto = produtos.map(el => {
        return (
            <div className="intens-carrinho" key={el.id}>

                <div className="img-item">
                    <img src={el.imagem} alt="" />
                </div>

                <div className="desc-item">

                    <div className="item-titulo">
                        <h3>{el.nome}</h3>

                        <button className="btn-item" onClick={() => removerIntems(el.id)} >
                            <FaRegTrashCan />
                        </button>

                    </div>

                    <span>R$ {el.preco.toFixed(2)}</span>
                    <p className="container-frete">Frete: R$  <span className="valor-frete"> {frete.toFixed(2)}
                    </span>
                    </p>

                    <div className="btn-container">

                        <button className="btn-item" onClick={() => diminuirQuantidade(el.id)}>
                            <FaMinus />
                        </button>

                        <span>{el.quantidade}</span>

                        <button className="btn-item" onClick={() => aumentarQuantidade(el.id)}>

                            <FaPlus />

                        </button>
                    </div>
                </div>


            </div>

        )
    })


    return (
        <>
            <Header />

            <main className="container-principal">

                

                <section className="container-carrinho">

                    <div className="container-itens">
                        <h2 className="titulo-itens">
                            ITENS DO CARRINHO
                        </h2>

                        {produto}
                    </div>

                    <div className="resumo-carrinho">
                        <h2>Resumo</h2>

                        <div className="valores">
                            <p>Subtotal: <span>0</span></p>
                            <p>Frete: R$ <span>0</span></p>
                            <p>Total: R$<span>0</span></p>
                        </div>


                        <div className="btn-acao">
                            <button>Finalizar</button>
                        </div>

                    </div>



                </section>

            </main>

            <Footer />
        </>
    )
}


export default Cart