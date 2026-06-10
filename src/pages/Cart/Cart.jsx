import { useState } from "react";

import './Cart.css'
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";


function Cart() {
    return (
        <>
            <Header />

            <main className="container-pricipal">

                <h1>MEU CARRINHO</h1>

                <section className="container-carrinho">

                    <div className="itens-carrinho">

                        <h2>
                            TENS DO CARRINHO
                        </h2>

                        <div>
                            intems
                        </div>

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