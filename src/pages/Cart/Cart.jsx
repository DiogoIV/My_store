import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaRegTrashCan } from '../../assets/icons'

import { IoCartOutline } from "react-icons/io5";
import './Cart.css'
import { CartContext } from "../../Context/CartContext/CartContext";






function Cart() {
    const { cart, aumentarQuantidade, diminuirQuantidade, removerProduto, resultadoResumo } = useContext(CartContext)
    console.log(resultadoResumo)
    

    const produto = cart.map(el => {
        return (
            <div className="intens-carrinho" key={el.id}>

                <div className="img-item">
                    <img src={el.imagem} alt="" />
                </div>

                <div className="desc-item">

                    <div className="item-titulo">
                        <h3>{el.nome}</h3>

                        <button className="btn-item" onClick={() => removerProduto(el.id)} >
                            <FaRegTrashCan />
                        </button>

                    </div>

                    <span>R$ {el.preco.toFixed(2)}</span>
                    <p className="container-frete">Frete: R$  <span className="valor-frete"> {resultadoResumo.frete.toFixed(2)}
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


    /*Resumo*/



    return (
        <>

            <main className="container-principal-cart">



                <section className="container-carrinho">

                    <div className="container-itens">
                        <h2 className="titulo-itens">
                            ITENS DO CARRINHO
                        </h2>

                        {produto}
                    </div>

                    <div className="resumo-carrinho">
                        <h2>Resumo</h2>


                        {cart.length !== 0 ? (
                            <>
                                <div className="valores">
                                    <p>Subtotal: <span className="valores-calculados"> R$ {resultadoResumo.subtotal.toFixed(2)}</span></p>

                                    <p>Frete:  <span className="valores-calculados"> R$ {resultadoResumo.frete.toFixed(2)}</span></p>
                                    <p>Total: <span className="valores-calculados"> R$ {resultadoResumo.total.toFixed(2)}</span></p>
                                </div>


                                <Link to="/checkout" className="btn-acao">
                                    <button>Finalizar</button>
                                </Link>
                            </>

                        ) : (
                            <>
                                <div className="carrinho-vazio">

                                    <div className="desc-resumo">
                                        <h3><IoCartOutline /> Carrinho vazio</h3>
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