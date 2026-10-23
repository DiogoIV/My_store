import './enderecos.css'


import { FaPlus, LuAsterisk, RiErrorWarningLine } from '../../../assets/icons/index'
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
        cardsEnderecos.length > 0 ? enderecos.find(endereco => endereco.padrao) : null
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

                <button onClick={() => {
                    setExibirModal(true), EscolherCard(item.id), setExibirErro(false)
                    setModoFormulario('editar')
                }}>EDITAR</button>

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

    const itemsDadosFormularios = {
            titulo: "",
            nome: "",
            rua: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            estado: "",
            cep: "",
            
    }

    const [dadosFomularios, setDadosFormularios] = useState(itemsDadosFormularios)

    const [modoFormulario, setModoFormulario] = useState('')

    const [exibirErro, setExibirErro] = useState(false)

    


    function validarCampos() {
       
        

        if (dadosFomularios.bairro.trim() === "" || dadosFomularios.cep.trim() === "" || dadosFomularios.cidade.trim() === "" || dadosFomularios.estado.trim() === "" || dadosFomularios.numero.trim() === "" || dadosFomularios.rua.trim() === "" || dadosFomularios.titulo.trim() === "") {
            
            return true
        }

        return false
    }

    

    function EscolherCard(id) {
        
        const valoresFormularios = cardsEnderecos.find(item => item.id === id)

        
        setDadosFormularios(valoresFormularios)
    }



    function salvarEditarAdicionar() {
        setExibirErro(false)
        

        if (validarCampos()) {
            setExibirModal(true)
            setExibirErro(true)
            return
        }

        if (modoFormulario === 'adicionar') {
            setCardsEnderecos((prev)=> [
                ...prev,
                dadosFomularios
            ])
        }


        if (modoFormulario === 'editar') {


            setCardsEnderecos((prev) => {
                return prev.map((item) => {

                    return item.id === dadosFomularios.id ? dadosFomularios : item

                }

                )
            })

            
        }

        setExibirModal(false)
    }







    return (



        < main className='container-principal-enderecos' >

            <h1>Endereços</h1>

            <section className='sessao-enderecos'>

                {cardsEnderecos.length > 0 ? (
                    <>
                        <div className='container-endereços'>
                            {cardEndereco}

                        </div>



                        <div className='btn-add-endereco'>
                            <button onClick={() => {
                                setExibirModal(true); 
                                setModoFormulario('adicionar');
                                setDadosFormularios(itemsDadosFormularios);
                                setExibirErro(false)
                            }}>
                                <FaPlus className='icon-add' /> ADICIONAR NOVO ENDEREÇO
                            </button>
                        </div>
                    </>
                ) :
                    (
                        <div className='container-off-endereço'>
                            <p>Você não possui endereços cadastrados.</p>

                            <div className='btn-add-endereco'>
                                <button onClick={() => {
                                    setExibirModal(true); setDadosFormularios(itemsDadosFormularios);
                                    setModoFormulario('adicionar');
                                    setExibirErro(false)
                                }}>
                                    <FaPlus className='icon-add' /> ADICIONAR NOVO ENDEREÇO
                                </button>
                            </div>
                        </div>
                    )
                }



            </section>

            {exibirModal &&


                <div className='container-modal-enderecos'>

                    <div className='modal-enderecos'>



                        <form action="" className='form-modal-enderecos' onSubmit={(e) => e.preventDefault()}>

                            <h1>{modoFormulario === 'editar' ? 'Editar endereço' : 'Adicionar endereço'}</h1>

                            <div className='campo-identificacao campos-editar-endereço'>

                                <label htmlFor="identificacao">
                                    Identificação do Endereço <LuAsterisk className="icon-obr" />
                                </label>



                                <input type="text" id="identificacao" value={dadosFomularios.titulo} onChange={(e) => setDadosFormularios(prev =>
                                ({
                                    ...prev,
                                    titulo: e.target.value
                                })
                                )} />

                            </div>

                            <div className='campo-cep campos-editar-endereço'>

                                <label htmlFor="cep">
                                    CEP <LuAsterisk className="icon-obr" />
                                </label>

                                <input type="text" id="cep" value={dadosFomularios.cep} onChange={(e) => setDadosFormularios(prev =>
                                ({
                                    ...prev,
                                    cep: e.target.value
                                })
                                )} />

                            </div>

                            <div className='campo-rua campos-editar-endereço'>

                                <label htmlFor="rua">
                                    Rua
                                    <LuAsterisk className="icon-obr" />
                                </label>

                                <input type="text" id="rua" value={dadosFomularios.rua} onChange={(e) => setDadosFormularios(prev =>
                                ({
                                    ...prev,
                                    rua: e.target.value
                                })
                                )} />

                            </div>




                            <div className='campo-bairro campos-editar-endereço '>

                                <label htmlFor="bairro">
                                    Bairro
                                    <LuAsterisk className="icon-obr" />
                                </label>

                                <input type="text" id="bairro"
                                    value={dadosFomularios.bairro} onChange={(e) => setDadosFormularios(prev =>
                                    ({
                                        ...prev,
                                        bairro: e.target.value
                                    })
                                    )} />
                            </div>


                            <div className='campo-cidade'>

                                <label htmlFor="cidade">
                                    Cidade
                                    <LuAsterisk className="icon-obr" />
                                </label>
                                <input type="text" id="cidade"
                                    value={dadosFomularios.cidade} onChange={(e) => setDadosFormularios(prev =>
                                    ({
                                        ...prev,
                                        cidade: e.target.value
                                    })
                                    )} />

                            </div>

                            <div className='campo-estado campos-editar-endereço'>
                                <label htmlFor="cidade">
                                    Estado
                                    <LuAsterisk className="icon-obr" />
                                </label>
                                <input type="text" id="estado"
                                    value={dadosFomularios.estado} onChange={(e) => setDadosFormularios(prev =>
                                    ({
                                        ...prev,
                                        estado: e.target.value
                                    })
                                    )} />
                            </div>




                            <div className='campo-numero campos-editar-endereço'>

                                <label htmlFor="numero">
                                    Número
                                    <LuAsterisk className="icon-obr" />
                                </label>

                                <input type="text" id="numero"
                                    value={dadosFomularios.numero} onChange={(e) => setDadosFormularios(prev =>
                                    ({
                                        ...prev,
                                        numero: e.target.value
                                    })
                                    )} />

                            </div>


                            <div className='campo-complemento campos-editar-endereço'>

                                <label htmlFor="complemento">Complemento</label>

                                <input type="text" id="complemento"
                                    value={dadosFomularios.complemento} onChange={(e) => setDadosFormularios(prev =>
                                    ({
                                        ...prev,
                                        complemento: e.target.value
                                    })
                                    )} />

                            </div>

                            <div className='campo-obr'>
                                <LuAsterisk className="icon-obr" />
                                <p>Campos obrigatórios</p>
                            </div>

                            {exibirErro && <span className='aviso-erro-endereco'>

                                <RiErrorWarningLine size={20} />

                                <p>Preencha os campos obrigatórios (*)</p>

                            </span>}


                            <div className='container-btn-editar'>

                                <button onClick={() => {setExibirModal(false)
                                setExibirErro(false)
                                }}>Cancelar</button>
                                <button onClick={() => salvarEditarAdicionar()}>Salvar</button>

                            </div>

                        </form>

                    </div>
                </div>

            }


        </main >
    )
}

export default Enderecos