import { v4 as uuidv4, v4 } from "uuid";
import { useState } from 'react'

/* import das img*/
import {
    cacto_bola,
    cactos_mandacaru,
    echinopsis,
    schlumbergera
} from '../assets/imagens/produtos/cactos'

import { alecrim, jasmim, lavandas, papoulas } from '../assets/imagens/produtos/flores';

import {
    coniferas,
    hepaticas,
    licopodios,
    samambaias
} from '../assets/imagens/produtos/plantas_verdes';

import {
    colar_de_perolas,
    planta_jade,
    rabo_de_burro,
    suculenta_zebra
} from '../assets/imagens/produtos/suculentas'


import {
    PiGridFour,
    PiCactusBold,
    IoFlowerOutline,
    PiPlant,
    LuFlower
} from '../assets/icons/index'




const cactos = [{
    id: v4(),
    nome: "Cacto Mandacaru",
    descricao: 'Resistente e fácil de cuidar',
    imagem: cactos_mandacaru,
    categoria: "Cactos",
    quantidade: 1,
    preco: 29.90

},

{
    id: v4(),
    nome: "Cacto_bola",
    descricao: 'Possui crescimento lento e pode viver por décadas',
    imagem: cacto_bola,
    categoria: "Cactos",
    quantidade: 1,
    preco: 20.00
},

{
    id: v4(),
    nome: "Echinopsis",
    descricao: 'Crescem bem em sol pleno e solos pobres/secos',
    imagem: echinopsis,
    categoria: "Cactos",
    quantidade: 1,
    preco: 30.00
},

{
    id: v4(),
    nome: "Cschlumbergera",
    descricao: 'prospera em ambientes sombreados e úmidos',
    imagem: schlumbergera,
    categoria: "Cactos",
    quantidade: 1,
    preco: 29.90
},
]

const flores = [
    {
        id: v4(),
        nome: "Alecrim",
        descricao: "Planta aromática resistente, ótima para temperos e ambientes",
        imagem: alecrim,
        preco: 19.90,
        quantidade: 1,
        categoria: "Flores"
    },
    {
        id: v4(),
        nome: "Jasmim",
        descricao: "Flor perfumada que traz sensação de calma e bem-estar",
        imagem: jasmim,
        preco: 24.90,
        quantidade: 1,
        categoria: "Flores"
    },
    {
        id: v4(),
        nome: "Lavanda",
        descricao: "Muito usada para relaxamento e decoração de ambientes",
        imagem: lavandas,
        preco: 22.90,
        quantidade: 1,
        categoria: "Flores"
    },
    {
        id: v4(),
        nome: "Papoula",
        descricao: "Flor delicada e vibrante, símbolo de beleza e leveza",
        imagem: papoulas,
        preco: 21.90,
        quantidade: 1,
        categoria: "Flores"
    }
];

const plantasVerdes = [
    {
        id: v4(),
        nome: "Coníferas",
        descricao: "Plantas resistentes que trazem um visual natural e elegante",
        imagem: coniferas,
        preco: 34.90,
        quantidade: 1,
        categoria: "Plantas verdes"
    },
    {
        id: v4(),
        nome: "Hepáticas",
        descricao: "Plantas delicadas que gostam de ambientes úmidos e sombreados",
        imagem: hepaticas,
        preco: 89.90,
        quantidade: 1,
        categoria: "Plantas verdes"
    },
    {
        id: v4(),
        nome: "Licopódios",
        descricao: "Plantas antigas com visual diferenciado e ornamental",
        imagem: licopodios,
        preco: 31.90,
        quantidade: 1,
        categoria: "Plantas verdes"
    },
    {
        id: v4(),
        nome: "Samambaias",
        descricao: "Clássicas plantas de interior, ideais para ambientes sombreados",
        imagem: samambaias,
        preco: 26.90,
        quantidade: 1,
        categoria: "Plantas verdes"
    }
];

const suculentas = [
    {
        id: v4(),
        nome: "Colar de Pérolas",
        descricao: "Planta pendente com folhas que lembram pequenas pérolas",
        imagem: colar_de_perolas,
        preco: 29.90,
        quantidade: 1,
        categoria: "Suculentas"
    },
    {
        id: v4(),
        nome: "Planta Jade",
        descricao: "Planta suculenta resistente associada à sorte e prosperidade",
        imagem: planta_jade,
        preco: 32.90,
        quantidade: 1,
        categoria: "Suculentas"
    },
    {
        id: v4(),
        nome: "Rabo de Burro",
        descricao: "Suculenta pendente de fácil cultivo e visual decorativo",
        imagem: rabo_de_burro,
        preco: 27.90,
        quantidade: 1,
        categoria: "Suculentas"
    },
    {
        id: v4(),
        nome: "Suculenta Zebra",
        descricao: "Suculenta com listras marcantes e aparência exótica",
        imagem: suculenta_zebra,
        preco: 25.90,
        quantidade: 1,

        categoria: "Suculentas"
    }
];

export const categorias = [
    { id: 1, nome: "Todos", icon: PiGridFour   },
    { id: 2, nome: "Cactos", icon: PiCactusBold },
    { id: 3, nome: "Suculentas", icon: IoFlowerOutline},
    { id: 4, nome: "Flores", icon: LuFlower },
    { id: 5, nome: "Plantas verdes", icon: PiPlant }
]

export const produtos = [
        ...cactos,
        ...flores,
        ...plantasVerdes,
        ...suculentas
]