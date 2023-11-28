import { Component, ReactNode } from "react"
import './style.css'
import { BsXLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import EditarCliente from "./editarCliente";
import Swal from "sweetalert2";

type props = {
    id: number,
    nome: string,
    nomeSocial: string,
    email: string
}

export default class Cliente extends Component<props>{
    constructor(props: any) {
        super(props)
    }

    deletar() {
        Swal.fire({
            title: "Tem certeza que quer excluir o cliente?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: 'firebrick',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Cliente excluido", "", "success");
            }
          });
    }

    render(): ReactNode {
        return(
            <div>
                <div className="list-group-item list-group-item-action item-listado">
                    <div className="conteudo">
                        <span>{this.props.id}</span>
                        <span>{this.props.nomeSocial}</span>
                    </div>
                    <div className="acoes">
                        <EditarCliente
                            id={this.props.id}
                            nome={this.props.nome}
                            nomeSocial={this.props.nomeSocial}
                            email={this.props.email}
                        ></EditarCliente>
                        <BsXLg className="icone" style={{color: 'red'}} onClick={this.deletar}/>
                        <BsChevronDown className="icone"/>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}