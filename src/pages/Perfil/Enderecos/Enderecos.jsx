import './enderecos.css'


import { FaPlus } from '../../../assets/icons/index'
import { useState } from 'react';

function Enderecos() {

    /*cards endereço*/

    const enderecos = [

        {
            id: 1,
            titulo: "Casa",
            nome: "Diogo Rodrigues",
            rua: "Rua Miranda Silva",
            numero: "123",
            complemento: "Apto 42",
            bairro: "Cidade Tiradentes",
            cidade: "São Paulo",
            estado: "SP",
            cep: "08400-000",
            padrao: true
        },
        {
            id: 2,
            titulo: "Trabalho",
            nome: "Diogo Rodrigues",
            rua: "Avenida Paulista",
            numero: "1000",
            complemento: "Sala 12",
            bairro: "Bela Vista",
            cidade: "São Paulo",
            estado: "SP",
            cep: "01310-100",
            padrao: false
        },
        {
            id: 3,
            titulo: "Casa dos pais",
            nome: "Diogo Rodrigues",
            rua: "Rua das Flores",
            numero: "250",
            complemento: "",
            bairro: "Itaquera",
            cidade: "São Paulo",
            estado: "SP",
            cep: "08220-000",
            padrao: false
        }
    ];

    const [cardsEnderecos, setCardsEnderecos] = useState(enderecos)

    const [enderecoPadrao, setEnderecoPadrao] = useState(
        enderecos.length > 0 ? enderecos.find(endereco => endereco.padrao) : null
    );

    function ExcluirEndereco(id) {

        setCardsEnderecos(cardsEnderecos.filter(item => item.id != id))

    }

    function tornarPadrão(id) {
        setCardsEnderecos(cardsEnderecos.map(item =>
        (
            item.id === id ? {
                ...item,
                padrao: true
            }
                :
                {
                    ...item,
                    padrao: false
                }
        )
        ))
    }

    const cardEndereco = cardsEnderecos.map(item => (

        <div className='card-enderecos' key={item.id}>

            <div className='card-titulos'>

                <h2>{item.titulo}</h2>
                {item.padrao && <span className='titulos-padrao'>(PADRÃO)</span>}

            </div>

            <ul className='enderecos-dados'>

                <li>{item.rua} {item.numero}</li>
                <li>{item.bairro} </li>
                <li>{item.cidade} - {item.estado}</li>
                <li>{item.cep}</li>

            </ul>

            <div className='dados-btn'>

                <button>EDITAR</button>

                <button onClick={() => ExcluirEndereco(item.id)}>EXCLUIR</button>

                {!item.padrao &&
                    <button className='btn-padrao' onClick={() => tornarPadrão(item.id)}>
                        TORNAR PADRÃO
                    </button>}

            </div>

        </div>


    ))

    /*container flutante(editar/adicionar endereços)*/

    const [exibirModal, setExibirModal] = useState(false)

    console.log(exibirModal, 'modal')


    return (



        < main className='container-principal-enderecos' >

            <h1>Endereços</h1>

            <section className='sessao-enderecos'>

                {enderecoPadrao ? (
                    <>
                        <div className='container-endereços'>
                            {cardEndereco}

                        </div>



                        <div className='btn-add-endereco'>
                            <button onClick={() => setExibirModal(true)}>
                                <FaPlus className='icon-add' /> ADICIONAR NOVO ENDEREÇO
                            </button>
                        </div>
                    </>
                ) :
                    (
                        <div>
                            <p>Você não possui endereços cadastrados.</p>
                            <button  >
                                <FaPlus /> Adicionar endereço
                            </button>
                        </div>
                    )
                }



            </section>

            {exibirModal &&


                <div className='container-modal-enderecos'>

                    <div className='modal-enderecos'>

                        

                        <form action="" className='form-modal-enderecos'>

                            <h1>Editar endereço</h1>

                            <div className='campo-identificacao'>

                                <label htmlFor="identificacao">Identificação do Endereço
                                </label>

                                <input type="text" id="identificacao" />

                            </div>

                            <div className='campo-cep'>

                                <label htmlFor="cep">CEP</label>
                                <input type="number" id="cep" />

                            </div>

                            <div className='campo-rua'>

                                <label htmlFor="rua">Rua</label>

                                <input type="text" id="rua" />

                            </div>




                            <div className='campo-rua'>
                                <label htmlFor="bairro">Bairro</label>
                                <input type="text" id="bairro" />
                            </div>


                            <div className='campo-cidade'>
                                <label htmlFor="cidade">Cidade</label>
                                <input type="text" id="cidade" />
                            </div>

                            <div className='campo-estado'>
                                <label htmlFor="cidade">Estado</label>
                                <input type="text" id="estado" />
                            </div>


                            

                            <div className='campo-numero'>

                                <label htmlFor="numero">Número</label>

                                <input type="text" id="numero" />

                            </div>


                            <div className='campo-complemento'>

                                <label htmlFor="complemento">Complemento</label>

                                <input type="text" id="complemento" />

                            </div>

                        </form>

                    </div>
                </div>

            }


        </main >
    )
}

export default Enderecos