import { Component, ReactNode } from "react";
import { BsChevronDown, BsXLg } from "react-icons/bs";
import Swal from "sweetalert2";
import EditarPet from "./editarPet";

type props = {
    id: number,
    nome: string,
    tipo: string,
    raca: string,
    idDono: number
}

type state = {
    show: boolean,
}


export default class Pet extends Component<props, state>{
    constructor(props: any) {
        super(props)
        this.state = {
            show: false
        }
    }

    toggleShow = () => this.setState({show: !this.state.show});
    deletar() {
        Swal.fire({
            title: "Tem certeza que quer excluir o pet?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: 'firebrick',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Pet excluido", "", "success");
            }
          });
    }

    render(): ReactNode {
        return(
            <div className="list-group-item list-group-item-action">
                <div className="item-listado">
                    <div className="conteudo">
                        <span>{this.props.id}</span>
                        <span>{this.props.nome}</span>
                    </div>
                    <div className="acoes">
                        <EditarPet
                            id={this.props.id}
                            nome={this.props.nome}
                            tipo={this.props.tipo}
                            raca={this.props.raca}
                            idDono={this.props.idDono}
                        ></EditarPet>
                        <BsXLg className="icone" style={{color: 'red'}} onClick={this.deletar}/>
                        <BsChevronDown onClick={this.toggleShow} className="icone"/>
                    </div>
                </div>
                {this.state.show && 
                    <div>
                        <div className="detalhes">
                            <div className="detalhes-item">
                                <div><b>Id dono:  </b>{this.props.idDono}</div>
                                <div><b>Nome:  </b>{this.props.nome}</div>
                                <div><b>Tipo:  </b>{this.props.tipo}</div>
                                <div><b>Raça:  </b>{this.props.raca}</div>

                            </div>                            
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}