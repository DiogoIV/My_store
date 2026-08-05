

import { ambiente_decorado_destaque, restaurante_decorado_destaque, sala_decorado_destaque } from '../../assets/imagens/ofertas_destaques'

import ProductCard from "../ProductCard/ProductCard";

import { destaques } from "../../data/destaques/destaque";

console.log(destaques, 'destaque')

import './Main.css'


import { IoIosArrowBack, IoIosArrowForward, PiCactusBold } from '../../assets/icons'

import { use, useState } from "react";
import { Link } from "react-router-dom";






function Main({ produtos, categorias }) {
    /*destaques*/
   

    const [index, setIndex] = useState(0)


    const destaquesatual = destaques[index]

    function next() {
        setIndex((next) =>
            next === destaques.length - 1 ? 0 : next + 1
        )
    }

    function prev() {
        setIndex((prev) =>
            prev === 0 ? destaques.length - 1 : prev - 1
        )
    }

    /*categorias*/
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");



    const categoriasredender = categorias.map((cat) => {
        const Icon = cat.icon
        return (
            <div className="card_categorie" key={cat.id}>
                <button className={`btn_categorie ${cat.nome === categoriaSelecionada ? 'active' : ''}`} onClick={() => setCategoriaSelecionada(cat.nome)}>
                    <Icon className="icon_categorie" />

                    <span className="desc-categorie">
                        {cat.nome}
                    </span>
                </button>

            </div>
        )
    })
    /* cards*/

    const [vermais, setMais] = useState(false)

    function verificar( ) {
        if (!vermais) {
            return produtos.slice(0,8)
        } else {
            return produtos
        }
    }

    const produtosFiltrados = categoriaSelecionada === "Todos" ? verificar() : produtos.filter(el => el.categoria === categoriaSelecionada)


    const cards = produtosFiltrados.map((el) => {

        return <ProductCard key={el.id} produto={el} />
    })



    return (
        <main className="container-main">
            <section className="container-carousel" >

                <div className="container_img_destaque" key={destaquesatual.id}>
                    <img src={destaquesatual.img} alt={destaques.alt} className="img_carousel" />

                </div>

                <div className="desc-carousel">
                    <h2>{destaquesatual.titulo}</h2>
                    <p>
                        {destaquesatual.desc}
                    </p>
                    <Link to={`/carousel/${destaquesatual.slug}`} className="btn-ver-mais">Ver mais</Link>
                </div>

                <div className="carousel-controls">
                    <button className="btn_left" onClick={prev}>
                        <IoIosArrowBack />
                    </button>


                    <button className="btn_right" onClick={next}><IoIosArrowForward /></button>
                </div>
            </section>

            <section className="container_categorie">
                {categoriasredender}
            </section>

            <section className="container_products">
                {cards}
                {categoriaSelecionada === "Todos" && (

                    <button onClick={()=> setMais(!vermais)} className='btn-exibir'>
                        {vermais ? 'Mostrar menos': "mostrar mais ↓"}
                    </button>
                )
                
                }
            </section>

            <section className="container_destaques">

                <div className="desc_destaques">
                    <h2>Ideias para transformar seu espaço</h2>
                    <p>Ideias para decorar e trazer mais natureza para o seu espaço.</p>
                </div>

                <div className="container_img-destaques">
                    <div className="img_destaques">
                        <img src={sala_decorado_destaque} alt="sala_decorada" />
                    </div>
                    <div className="img_destaques">
                        <img src={restaurante_decorado_destaque} alt="Restaurante_decorado" />
                    </div>
                    <div className="img_destaques">
                        <img src={ambiente_decorado_destaque} alt="ambiente_decorado" />
                    </div>
                </div>

            </section>

        </main>
    )
}

export default Main