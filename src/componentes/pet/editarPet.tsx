import { Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import './../style.css'

type props = {
    id: number,
    nome: string,
    tipo: string,
    raca: string,
    idDono: number
}

type state = {
    show: boolean
}

export default class EditarPet extends Component<props, state>{    
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
                    <Modal.Title>Editar pet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='form-cliente container-fluid'>
                            <form id='editar-pet'>
                                <div>
                                    <label htmlFor="nome">Nome</label>
                                    <input className="form-control" id="nome" type="text" defaultValue={this.props.nome}></input>
                                </div>
                                <div>
                                    <label htmlFor="tipo">Tipo</label>
                                    <input className="form-control" id="tipo" type="text" defaultValue={this.props.tipo}></input>
                                </div>
                                <div>
                                    <label htmlFor="raca">Raça</label>
                                    <input className="form-control" id="raca" type="text" defaultValue={this.props.raca}></input>
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