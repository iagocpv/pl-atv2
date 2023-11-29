import { Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import './../style.css'

type props = {
    id: number,
    nome: string,
    valor: number,
    quantidade: number
}

type state = {
    show: boolean
}

export default class EditarServico extends Component<props, state>{    
    constructor(props: props | Readonly<props>) {
        super(props)
        this.state = {
            show: false
        }
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});
    
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
                    <Modal.Title>Editar serviço</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='form-cliente container-fluid'>
                            <form id='editar-servico'>
                                <div>
                                    <label htmlFor="nome">Nome</label>
                                    <input className="form-control" id="nome" type="text" defaultValue={this.props.nome}></input>
                                </div>
                                <div>
                                    <label htmlFor="valor">Valor</label>
                                    <input className="form-control" id="valor" type="text" defaultValue={this.props.valor}></input>
                                </div>
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