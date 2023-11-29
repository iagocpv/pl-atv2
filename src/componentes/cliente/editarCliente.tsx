import { Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import './../style.css'
import { IMaskInput } from "react-imask";

type props = {
    id: number,
    nome: string,
    nomeSocial: string,
    email: string,
    rua: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    info: string
    telefones: {
        id: number,
        numero: string,
        ddd: string,
        links: never[]
    }[]
}

type state = {
    show: boolean,
    secaoForm: string
}

export default class EditarCliente extends Component<props, state>{    
    constructor(props: props | Readonly<props>) {
        super(props)
        this.state = {
            show: false,
            secaoForm: 'Informações Básicas'
        }
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});
    changeSecao(valor: string){
        this.setState({secaoForm: valor})
    }
    
    render() {
        return(
            <>
                <BsPencil onClick={this.handleShow} className="edit"/>

                <Modal
                    size='lg'
                    show={this.state.show}
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Editar cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='form-cliente container-fluid'>
                            <form id='editar-cliente'>
                                <div className='seletor-secao'>
                                    <div onClick={() => this.changeSecao('Informações Básicas')}>Informações</div>
                                    <div onClick={() => this.changeSecao('Endereço')}>Endereço</div>
                                    <div onClick={() => this.changeSecao('Telefones')}>Telefones</div>
                                </div>
                                <h4>{this.state.secaoForm}</h4>
                                {this.state.secaoForm === 'Informações Básicas' && 
                                    <>
                                        <div>
                                            <label htmlFor="nome">Nome</label>
                                            <input className="form-control" id="nome" type="text" defaultValue={this.props.nome}></input>
                                        </div>
                                        <div>
                                            <label htmlFor="nome">Nome Social</label>
                                            <input className="form-control" id="nomeSocial" type="text" defaultValue={this.props.nomeSocial}></input>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <input className="form-control" id="email" type="email" defaultValue={this.props.email}></input>
                                        </div>
                                    </>
                                }
                                {this.state.secaoForm === 'Endereço' && 
                                    <>
                                        <div>
                                            <label htmlFor="nome">Rua</label>
                                            <input className="form-control" id="nome" type="text" defaultValue={this.props.rua}></input>
                                        </div>
                                        <div>
                                            <label htmlFor="nome">Número</label>
                                            <input className="form-control" id="nomeSocial" type="text" defaultValue={this.props.numero}></input>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Bairro</label>
                                            <input className="form-control" id="email" type="text" defaultValue={this.props.bairro}></input>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Cidade</label>
                                            <input className="form-control" id="email" type="text" defaultValue={this.props.cidade}></input>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Estado</label>
                                            <input className="form-control" id="email" type="text" defaultValue={this.props.estado}></input>
                                        </div>
                                        <div>
                                            <label htmlFor="email">CEP</label>
                                            <input className="form-control" id="email" type="text" defaultValue={this.props.cep}></input>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Informações adicionais</label>
                                            <textarea className="form-control" id="email" defaultValue={this.props.info}></textarea>
                                        </div>
                                    </>
                                }
                                {this.state.secaoForm === 'Telefones' &&
                                    <>
                                        {this.props.telefones.map((t, i) => {
                                            return <div key={i+1}>
                                                        <label htmlFor={`telefone-${i+1}`}>Telefone {i+1}</label>
                                                        <IMaskInput
                                                        className="form-control" id={`telefone-${i+1}`} type="text" defaultValue={t.ddd + t.numero}
                                                        mask='(00) 000000000'
                                                        />
                                                    </div>
                                        })}
                                    </>
                                }
                            </form>
                        </div>
                    
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Fechar</Button>
                    <button className='btn btn-primary' type='button'>Editar</button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}