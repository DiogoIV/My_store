import { useEffect, useState, useContext, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

import { CartContext } from "../../Context/CartContext/CartContext";
import { AuthContext } from "../../Context/authContext/AuthContext";

import {
    FaRegUser,
    FaCartArrowDown,
    FaLeaf,
    FaRegHeart,
    FaSearch,
    FaRegUserCircle,
    IoIosArrowDown
} from '../../assets/icons'

import { produtos } from "../../data";

function Header({ modo, className }) {

    const { contadorCart } = useContext(CartContext)

    const token = localStorage.getItem('token')

    /*pesquisa*/

    const [pesquisa, setpesquisa] = useState("")
    const [exibir, setExibir] = useState(false)
    const produtoSelecionado = produtos.filter((prod) => {
        return pesquisa.trim().length > 0 && prod.nome.toLowerCase().includes(pesquisa.trim().toLowerCase())
    })
    const maisVendidos = produtos.slice(0, 5)



    const produtoExibir = produtoSelecionado.map(el => {
        console.log(el.id)

        return (

            <Link to={`/produtos/${el.id}`}
                className="lista_pesquisa"
                key={el.id}
            >
                <div className="container_img-pesquisa">
                    <img src={el.imagem} alt={el.alt} />
                </div>
                <div className="container_desc-pesquisa">
                    <h3>{el.nome}</h3>
                    <p>{el.descricao}</p>
                    <span className="precos_pesquisa">R$ {el.preco.toFixed(2)}</span>
                </div>

            </Link>
        )
    })

    const mostraDropdown = exibir && pesquisa.trim().length > 0

    /*Dropdown menu perfil*/

    const { isAuthenticated, loggedOut } = useContext(AuthContext)

    const [menuPerfil, setMenuPerfil] = useState(false)

    const containerRef = useRef(null)

    useEffect(() => {

        function verificarClique(event) {

            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setMenuPerfil(false)
            }

        }

        document.addEventListener('click', verificarClique)

        return () => {
            document.removeEventListener('click', verificarClique)
        }

    }, [])


    return (
        <header className={modo === "login" ? "container-header-login" : "container-header"}>

            {/*Logo Principal*/}

            <Link to="/"
                className="logo"
            >
                <FaLeaf className="icon_logo" />
                <h1> Planta Shop</h1>
            </Link>

            {/*Barra de pesquisa*/}

            {modo !== "login" && (
                <>
                    <div className="search-bar">
                        <form id="container-search" onSubmit={(e) => e.preventDefault()}>
                            <input type="text"
                                placeholder="Buscar plantas..."
                                id="input_search"
                                value={pesquisa}
                                onChange={(el) => setpesquisa(el.target.value)}
                                onFocus={() => setExibir(true)}
                                onBlur={() => setTimeout(() => setExibir(false), 200)} />

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

                    <nav className={isAuthenticated ? "user user-token" : "user"}>


                        {isAuthenticated ? (
                            <div ref={containerRef} className="container-menu-perfil"
                            >

                                <button className="link-user" onClick={() => setMenuPerfil(!menuPerfil)}>

                                    <FaRegUserCircle className="icon-user" size={27} />

                                    <div className="user-nome">
                                        <span>Diogo</span>
                                    </div>

                                    <IoIosArrowDown className="icon-user" size={16} />

                                </button>

                                {menuPerfil && (

                                    <ul className="drop-down-perfil" >

                                        <li className="valores-drop-down">
                                            <NavLink>Minha Conta</NavLink>
                                        </li>

                                        <li className="valores-drop-down">
                                            <NavLink>Meus Pedidos</NavLink>
                                        </li>

                                        <li className="valores-drop-down">
                                            <NavLink>Endereços</NavLink>
                                        </li>

                                        <li className="valores-drop-down">
                                            <NavLink>Dados Pessoais</NavLink>
                                        </li>

                                        <li className="valores-drop-down">
                                            <NavLink>Fale Conosco</NavLink>
                                        </li>

                                        <button className="valores-btn-sair " onClick={loggedOut} >
                                            Sair
                                        </button>

                                    </ul>
                                

                                )}


                            </div>
                        ) :
                            <NavLink to='/login' className="link-user">
                                <FaRegUser className="icon-user" />
                            </NavLink>
                        }


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