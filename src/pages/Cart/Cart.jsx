import { useState } from "react";
import { Link } from "react-router-dom";
import { alecrim, jasmim, lavandas, papoulas } from '../../assets/imagens/produtos/flores'
import { FaPlus, FaMinus, FaRegTrashCan } from '../../assets/icons'

import { IoCartOutline } from "react-icons/io5";
import './Cart.css'
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";



function Cart() {


    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: "Alecrim",
            imagem: alecrim,
            preco: 19.90,
            quantidade: 1,
            frete: 15.50


        },

        {
            id: 2,
            nome: "Jasmim",
            imagem: jasmim,
            preco: 24.90,
            quantidade: 1,
            frete: 20.50

        },

        {
            id: 3,
            nome: "Lavanda",
            imagem: lavandas,
            preco: 22.90,
            quantidade: 1,
            frete: 30.40

        }
    ])

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
                    <p className="container-frete">Frete: R$  <span className="valor-frete"> {el.frete.toFixed(2)}
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
            if (produto.id === ID) {

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

    /*Resumo*/

    function resumo() {
        let totais = {
            preco: 0,
            frete: 0,
            total: 0
        }

        for (let i = 0; i !== produtos.length; i++) {
            totais.preco += produtos[i].preco * produtos[i].quantidade

            totais.frete += produtos[i].frete * produtos[i].quantidade


        }

        totais.total = totais.preco + totais.frete
        console.log(totais.total)

        return totais
    }

    const resultadoResumo = resumo()

    return (
        <>

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


                        {produtos.length !== 0 ? (
                            <>
                                <div className="valores">
                                    <p>Subtotal: <span className="valores-calculados"> R$ {resultadoResumo.preco.toFixed(2)}</span></p>

                                    <p>Frete:  <span className="valores-calculados"> R$ {resultadoResumo.frete.toFixed(2)}</span></p>
                                    <p>Total: <span className="valores-calculados"> R$ {resultadoResumo.total.toFixed(2)}</span></p>
                                </div>


                                <Link to="/checkout" className="btn-acao">
                                    <button>Finalizar</button>
                                </Link>
                            </>

                        ): (
                            <>
                                <div className="carrinho-vazio">

                                    <div className="desc-resumo">
                                        <h3><IoCartOutline/> Carrinho vazio</h3>
                                        <p>Você ainda não adicionou produtos.</p>
                                    </div>

                                    <div className="btn-vazio">
                                        <Link to="/">
                                            <button >
                                                Continuar comprando 
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )
                        }


                    </div>



                </section>

            </main>

            
        </>
    )
}


export default Cart