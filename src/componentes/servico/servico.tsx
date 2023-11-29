import { Component, ReactNode } from "react";
import { BsChevronDown, BsXLg } from "react-icons/bs";
import Swal from "sweetalert2";
import EditarServico from "./editarServico";

type props = {
    id: number,
    nome: string,
    valor: number,
    quantidade: number
}

type state = {
    show: boolean,
}


export default class Servico extends Component<props, state>{
    constructor(props: any) {
        super(props)
        this.state = {
            show: false
        }
    }

    toggleShow = () => this.setState({show: !this.state.show});
    deletar() {
        Swal.fire({
            title: "Tem certeza que quer excluir o serviço?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: 'firebrick',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Serviço excluido", "", "success");
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
                        <EditarServico
                            id={this.props.id}
                            nome={this.props.nome}
                            valor={this.props.valor}
                            quantidade={this.props.quantidade}
                        ></EditarServico>
                        <BsXLg className="icone" style={{color: 'red'}} onClick={this.deletar}/>
                        <BsChevronDown onClick={this.toggleShow} className="icone"/>
                    </div>
                </div>
                {this.state.show && 
                    <div>
                        <div className="detalhes">
                            <div className="detalhes-item">
                                <div><b>Nome:  </b>{this.props.nome}</div>
                                <div><b>Valor:  R$</b>{this.props.valor}</div>
                                <div><b>Quantidade vendida:  </b>{this.props.quantidade}</div>
                            </div>                            
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}