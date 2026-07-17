import { v4 as v4 } from "uuid";

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


const cactos = [
    {
        id: v4(),
        nome: "Cacto Mandacaru",

        descricao: "Cacto resistente e fácil de cuidar.",

        descricaoLonga: "O Cacto Mandacaru é uma espécie muito resistente, conhecida pelo crescimento vertical e pela adaptação a ambientes secos. É uma ótima opção para quem deseja uma planta bonita e de pouca manutenção.",

        imagem: cactos_mandacaru,

        categoria: "Cactos",
        quantidade: 1,
        preco: 29.90,

        cuidados: "Gosta de bastante luz solar, solo arenoso e boa drenagem. Evite deixar água acumulada no vaso.",

        altura: "50 cm",
        regamento: "1x a cada 10 dias",

        avaliacao: 4.8,
        totalAvaliacoes: 42,

        alt: "Cacto Mandacaru em vaso decorativo"
    },


    {
        id: v4(),
        nome: "Cacto Bola",

        descricao: "Cacto pequeno com formato arredondado e crescimento lento.",

        descricaoLonga: "O Cacto Bola possui formato arredondado e aparência ornamental. Seu crescimento é lento, sendo ideal para pequenos vasos e decoração de ambientes internos bem iluminados.",

        imagem: cacto_bola,

        categoria: "Cactos",
        quantidade: 1,
        preco: 20.00,

        cuidados: "Necessita de bastante iluminação, pouca água e solo próprio para cactos com boa drenagem.",

        altura: "20 cm",
        regamento: "1x a cada 15 dias",

        avaliacao: 4.6,
        totalAvaliacoes: 28,

        alt: "Cacto bola pequeno em vaso"
    },


    {
        id: v4(),
        nome: "Echinopsis",

        descricao: "Cacto conhecido pelas flores grandes e coloridas.",

        descricaoLonga: "O Echinopsis é um cacto de crescimento fácil e muito apreciado pelas suas flores grandes e chamativas. Desenvolve-se bem em locais com bastante sol.",

        imagem: echinopsis,

        categoria: "Cactos",
        quantidade: 1,
        preco: 30.00,

        cuidados: "Prefere sol pleno, solo seco e regas espaçadas. Evite excesso de umidade nas raízes.",

        altura: "40 cm",
        regamento: "1x a cada 10 dias",

        avaliacao: 4.9,
        totalAvaliacoes: 56,

        alt: "Cacto Echinopsis em vaso"
    },


    {
        id: v4(),
        nome: "Schlumbergera",

        descricao: "Cacto florido conhecido como flor de maio.",

        descricaoLonga: "A Schlumbergera é um cacto diferente das espécies tradicionais, pois prefere ambientes mais úmidos e protegidos. Suas flores coloridas tornam a planta muito utilizada na decoração.",

        imagem: schlumbergera,

        categoria: "Cactos",
        quantidade: 1,
        preco: 29.90,

        cuidados: "Prefere luz indireta, ambientes protegidos e regas moderadas. Evite sol forte direto.",

        altura: "30 cm",
        regamento: "2x semana",

        avaliacao: 4.7,
        totalAvaliacoes: 33,

        alt: "Cacto Schlumbergera com flores"
    },
];


const flores = [
    {
        id: v4(),
        nome: "Alecrim",

        descricao: "Planta aromática resistente e fácil de cultivar.",

        descricaoLonga: "O Alecrim é uma planta muito utilizada na culinária e decoração. Possui folhas perfumadas, crescimento resistente e se adapta bem a ambientes ensolarados.",

        imagem: alecrim,

        preco: 19.90,
        quantidade: 1,
        categoria: "Flores",

        cuidados: "Gosta de bastante sol, solo drenado e boa circulação de ar. Pode receber podas para estimular novos ramos.",

        altura: "60 cm",
        regamento: "2x semana",

        avaliacao: 4.7,
        totalAvaliacoes: 38,

        alt: "Alecrim verde em vaso"
    },


    {
        id: v4(),
        nome: "Jasmim",

        descricao: "Flor perfumada com aparência delicada.",

        descricaoLonga: "O Jasmim é conhecido pelas suas flores delicadas e pelo perfume marcante. É uma planta muito apreciada para jardins e ambientes externos por trazer beleza e aroma agradável.",

        imagem: jasmim,

        preco: 24.90,
        quantidade: 1,
        categoria: "Flores",

        cuidados: "Precisa de boa iluminação, solo fértil e podas ocasionais para manter seu desenvolvimento saudável.",

        altura: "100 cm",
        regamento: "3x semana",

        avaliacao: 4.9,
        totalAvaliacoes: 61,

        alt: "Jasmim com flores brancas"
    },


    {
        id: v4(),
        nome: "Lavanda",

        descricao: "Planta aromática com flores roxas e perfume suave.",

        descricaoLonga: "A Lavanda é uma planta muito valorizada pelo seu aroma e pelas suas flores roxas. É utilizada em decoração, jardins e ambientes que buscam uma sensação de tranquilidade.",

        imagem: lavandas,

        preco: 22.90,
        quantidade: 1,
        categoria: "Flores",

        cuidados: "Prefere sol pleno, pouca umidade e solo bem drenado. Evite excesso de água nas raízes.",

        altura: "50 cm",
        regamento: "2x semana",

        avaliacao: 4.8,
        totalAvaliacoes: 47,

        alt: "Lavanda roxa em vaso"
    },


    {
        id: v4(),
        nome: "Papoula",

        descricao: "Flor colorida e delicada para decoração.",

        descricaoLonga: "A Papoula é uma flor conhecida pelas cores vibrantes e aparência delicada. É uma ótima escolha para jardins e espaços bem iluminados.",

        imagem: papoulas,

        preco: 21.90,
        quantidade: 1,
        categoria: "Flores",

        cuidados: "Necessita de bastante luz, solo rico em nutrientes e boa drenagem. Evite excesso de umidade.",

        altura: "70 cm",
        regamento: "2x semana",

        avaliacao: 4.6,
        totalAvaliacoes: 29,

        alt: "Flor papoula colorida"
    }
];

const plantasVerdes = [
    {
        id: v4(),
        nome: "Coníferas",

        descricao: "Planta ornamental resistente com visual elegante.",

        descricaoLonga: "As Coníferas são plantas muito utilizadas na decoração por sua aparência natural e formato diferenciado. São resistentes e podem trazer um aspecto sofisticado para ambientes internos e externos.",

        imagem: coniferas,

        preco: 34.90,
        quantidade: 1,
        categoria: "Plantas verdes",

        cuidados: "Gosta de ambientes iluminados, solo bem drenado e regas moderadas. Evite excesso de água.",

        altura: "80 cm",
        regamento: "2x semana",

        avaliacao: 4.7,
        totalAvaliacoes: 36,

        alt: "Conífera verde ornamental em vaso"
    },


    {
        id: v4(),
        nome: "Hepáticas",

        descricao: "Planta delicada que prefere ambientes úmidos.",

        descricaoLonga: "As Hepáticas são plantas pequenas e delicadas que crescem naturalmente em ambientes úmidos e sombreados. Possuem uma aparência diferenciada e são ótimas para composições naturais.",

        imagem: hepaticas,

        preco: 89.90,
        quantidade: 1,
        categoria: "Plantas verdes",

        cuidados: "Prefere locais úmidos, luz indireta e solo sempre levemente úmido. Evite exposição ao sol forte.",

        altura: "20 cm",
        regamento: "3x semana",

        avaliacao: 4.5,
        totalAvaliacoes: 18,

        alt: "Planta hepática verde"
    },


    {
        id: v4(),
        nome: "Licopódios",

        descricao: "Planta ornamental com aparência diferenciada.",

        descricaoLonga: "Os Licopódios são plantas antigas com visual único, muito utilizadas como elementos decorativos por suas folhas pequenas e delicadas.",

        imagem: licopodios,

        preco: 31.90,
        quantidade: 1,
        categoria: "Plantas verdes",

        cuidados: "Manter em locais com luz indireta, boa umidade e proteção contra sol intenso.",

        altura: "40 cm",
        regamento: "2x semana",

        avaliacao: 4.6,
        totalAvaliacoes: 24,

        alt: "Licopódio ornamental verde"
    },


    {
        id: v4(),
        nome: "Samambaias",

        descricao: "Planta clássica de folhas verdes e volumosas.",

        descricaoLonga: "A Samambaia é uma das plantas mais populares para decoração de interiores. Suas folhas cheias deixam o ambiente mais natural e agradável.",

        imagem: samambaias,

        preco: 26.90,
        quantidade: 1,
        categoria: "Plantas verdes",

        cuidados: "Gosta de umidade, luz indireta e boa ventilação. Evite deixar o solo completamente seco.",

        altura: "60 cm",
        regamento: "3x semana",

        avaliacao: 4.9,
        totalAvaliacoes: 72,

        alt: "Samambaia verde em vaso"
    }
];

const suculentas = [
    {
        id: v4(),
        nome: "Colar de Pérolas",

        descricao: "Suculenta pendente com folhas em formato de pequenas pérolas.",

        descricaoLonga: "O Colar de Pérolas é uma suculenta pendente muito utilizada na decoração de ambientes. Suas folhas arredondadas criam um visual diferente e elegante quando cultivada em vasos suspensos.",

        imagem: colar_de_perolas,

        preco: 29.90,
        quantidade: 1,
        categoria: "Suculentas",

        cuidados: "Prefere bastante iluminação, solo bem drenado e pouca água. Evite deixar o substrato encharcado.",

        altura: "30 cm",
        regamento: "1x semana",

        avaliacao: 4.8,
        totalAvaliacoes: 45,

        alt: "Suculenta colar de pérolas pendente"
    },


    {
        id: v4(),
        nome: "Planta Jade",

        descricao: "Suculenta resistente com folhas verdes brilhantes.",

        descricaoLonga: "A Planta Jade é uma suculenta muito popular pela sua resistência e beleza. Suas folhas carnudas armazenam água, tornando a planta fácil de cuidar mesmo para iniciantes.",

        imagem: planta_jade,

        preco: 32.90,
        quantidade: 1,
        categoria: "Suculentas",

        cuidados: "Gosta de ambientes iluminados, solo seco e vasos com boa drenagem. Evite excesso de regas.",

        altura: "40 cm",
        regamento: "1x semana",

        avaliacao: 4.9,
        totalAvaliacoes: 83,

        alt: "Planta jade verde em vaso"
    },


    {
        id: v4(),
        nome: "Rabo de Burro",

        descricao: "Suculenta pendente com folhas alongadas e aparência decorativa.",

        descricaoLonga: "O Rabo de Burro é uma suculenta pendente muito apreciada para decoração de varandas e ambientes internos. Seus ramos crescem formando uma bela cascata de folhas.",

        imagem: rabo_de_burro,

        preco: 27.90,
        quantidade: 1,
        categoria: "Suculentas",

        cuidados: "Precisa de bastante claridade, pouca água e solo com excelente drenagem para evitar apodrecimento.",

        altura: "50 cm",
        regamento: "1x semana",

        avaliacao: 4.7,
        totalAvaliacoes: 39,

        alt: "Suculenta rabo de burro pendente"
    },


    {
        id: v4(),
        nome: "Suculenta Zebra",

        descricao: "Suculenta pequena com folhas listradas e aparência exótica.",

        descricaoLonga: "A Suculenta Zebra possui folhas com listras brancas marcantes e formato compacto. É uma excelente opção para pequenos vasos e decoração de interiores.",

        imagem: suculenta_zebra,

        preco: 25.90,
        quantidade: 1,
        categoria: "Suculentas",

        cuidados: "Necessita de boa iluminação, pouca água e solo arenoso com ótima drenagem.",

        altura: "15 cm",
        regamento: "1x semana",

        avaliacao: 4.8,
        totalAvaliacoes: 54,

        alt: "Suculenta zebra com folhas listradas"
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