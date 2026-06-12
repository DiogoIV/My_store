import { useState } from "react";
import { alecrim, jasmim, lavandas, papoulas } from '../../assets/imagens/produtos/flores'
import {FaPlus, FaMinus, FaRegTrashCan} from '../../assets/icons'

import './Cart.css'
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";



function Cart() {
    const produtos = [
        {
            id: 1,
            nome: "Alecrim",
            imagem: alecrim,
            preco: "R$ 19,90",

        },
        {
            id: 2,
            nome: "Jasmim",
            imagem: jasmim,
            preco: "R$ 24,90",

        },
        {
            id: 3,
            nome: "Lavanda",
            imagem: lavandas,
            preco: "R$ 22,90",

        }
    ]

    const produto = produtos.map(el => {
        return (
            <>


                <div className="intens-carrinho">

                    <div className="img-item">
                        <img src={el.imagem} alt="" />
                    </div>

                    <div className="desc-item">
                        <div className="item-titulo">
                            <h3>{el.nome}</h3>
                           
                            <button className="btn-item">
                                <FaRegTrashCan/>
                            </button>
                                
                        </div>
                        <span>{el.preco}</span>

                        <div className="btn-container">

                            <button className="btn-item">
                                <FaMinus />
                            </button>

                            <span>0</span>

                            <button className="btn-item">

                                <FaPlus />

                            </button>
                        </div>
                    </div>


                </div>

            </>
        )
    })


    return (
        <>
            <Header />

            <main className="container-pricipal">

                <h1>MEU CARRINHO</h1>

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