import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import {
    FaRegUser,
    FaCartArrowDown,
    FaLeaf,
    FaRegHeart,
    FaSearch
} from '../../assets/icons'

import { produtos} from "../../data";

function Header({modo, className }) {
    
    const {contadorCart} = useContext(CartContext)

    /*pesquisa*/
    const [pesquisa, setpesquisa] = useState("")
    const [exibir, setExibir] = useState(false)
    const produtoSelecionado = produtos.filter((prod) => {
        return pesquisa.trim().length > 0 && prod.nome.toLowerCase().includes(pesquisa.trim().toLowerCase())
    })
    const maisVendidos = produtos.slice(0, 5)



    const produtoExibir = produtoSelecionado.map(el => {
        return (

            <li className="lista_pesquisa" key={el.id}>
                <div className="container_img-pesquisa">
                    <img src={el.imagem} alt={el.alt} />
                </div>
                <div className="container_desc-pesquisa">
                    <h3>{el.nome}</h3>
                    <p>{el.descricao}</p>
                    <span className="precos_pesquisa">{el.preco}</span>
                </div>

            </li>
        )
    })

    const mostraDropdown = exibir && pesquisa.trim().length > 0


    return (
        <header className={modo === "login" ? "container-header-login" : "container-header"}>
            {/*Logo Principal*/}
            <Link to="/" className="logo">
                <FaLeaf className="icon_logo" />
                <h1> Planta Shop</h1>
            </Link>

            {/*Barra de pesquisa*/}
            {modo !== "login" && (
                <>
                    <div className="search-bar">
                        <form id="container-search">
                            <input type="text" placeholder="Buscar plantas..." id="input_search" value={pesquisa} onChange={(el) => setpesquisa(el.target.value)} onFocus={() => setExibir(true)} onBlur={() => setExibir(false)} />

                            {exibir && <div className="overlay" />}



                            {mostraDropdown && (<div className="container_pesquisa">
                                {produtoSelecionado.length > 0 ? (
                                    <ul className="resultado_pesquisa">
                                        {produtoExibir}
                                    </ul>
                                ) : (
                                    <p className="resultado_notfound">Nenhum Produto encontrado</p>
                                )}
                            </div>)
                            }


                        </form>

                        <button className="btn_search">
                            <FaSearch className="icon" />
                        </button>

                    </div>

                    {/*Navegação*/}

                    <nav className="user">

                        <NavLink to='/login' className="link-user">
                            <FaRegUser className="icon-user" />
                        </NavLink>

                        <NavLink to='/favoritos' className="link-user">
                            <FaRegHeart className="icon-user" />
                        </NavLink>

                        <NavLink to='/carrinho' className="link-user cart">

                            <FaCartArrowDown className="icon-user" />

                            <span className="badge">
                                {contadorCart()}
                            </span>
                        </NavLink>


                        
                   </nav>
                </>
            )}



        </header>
    )
}

export default Header