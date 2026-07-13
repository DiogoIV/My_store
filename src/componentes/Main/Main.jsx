import {
    jardim,
    mulher_cheirando,
    plantas_decoracao,
    plantas_regar,
    imagem_hero_sala
} from "../../assets/imagens/carrousel";

import { ambiente_decorado_destaque, restaurante_decorado_destaque, sala_decorado_destaque } from '../../assets/imagens/ofertas_destaques'
import ProductCard from "../ProductCard/ProductCard";


import './Main.css'


import { IoIosArrowBack, IoIosArrowForward, PiCactusBold } from '../../assets/icons'
import { useState } from "react";






function Main({ produtos, categorias }) {
    /*destaques*/
    const destaques = [
        {
            id: 1,
            titulo: 'Plantas para seu ambiente',
            desc: 'Encontre espécies para decorar sua casa.',
            img: plantas_decoracao,
            alt: "planta para decorar ambientes"

        },

        {
            id: 2,
            titulo: 'Plantas reduzem o estresse ',
            desc: 'Ambientes com plantas ajudam no bem-estar e trazem sensação de calma.',
            img: mulher_cheirando,
            alt: "mulher cheirando a planta"

        },

        {
            id: 3,
            titulo: 'Plantas verdes para interiores',
            desc: 'Crie ambientes mais aconchegantes.',
            img: imagem_hero_sala,
            alt: "sala decorada"
        },

        {
            id: 4,
            titulo: 'Regue e conserve suas plantas',
            desc: 'Cuide de  suas plantas e veja elas brilharem',
            img: plantas_regar,
            alt: "regar as plantas"
        }

    ]

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
                <button className={`btn_categorie ${cat.nome === categoriaSelecionada ? 'active' : ''}`} onClick={()=> setCategoriaSelecionada(cat.nome)}>
                    <Icon className="icon_categorie"/>

                    <span className="desc-categorie">
                        {cat.nome}
                    </span>
                </button>

            </div>
        )
    })
    /* cards*/
    
    const produtosFiltrados = categoriaSelecionada === "Todos" ? produtos : produtos.filter(el => el.categoria === categoriaSelecionada)


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
                    <button>Ver mais</button>
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