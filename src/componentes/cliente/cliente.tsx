import { Component, ReactNode } from "react"
import './../style.css'
import { BsXLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import EditarCliente from "./editarCliente";
import Swal from "sweetalert2";

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
}

export default class Cliente extends Component<props, state>{
    constructor(props: any) {
        super(props)
        this.state = {
            show: false
        }
    }

    toggleShow = () => this.setState({show: !this.state.show});

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
            <div className="list-group-item list-group-item-action">
                <div className="item-listado">
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
                            rua={this.props.rua}
                            numero={this.props.numero}
                            bairro={this.props.bairro}
                            cidade={this.props.cidade}
                            estado={this.props.estado}
                            cep={this.props.cep}
                            info={this.props.info}
                            telefones={this.props.telefones}
                        ></EditarCliente>
                        <BsXLg className="icone" style={{color: 'red'}} onClick={this.deletar}/>
                        <BsChevronDown onClick={this.toggleShow} className="icone"/>
                    </div>
                </div>
                {this.state.show && 
                    <div>
                        <div className="detalhes">
                            <h3>Informações básicas</h3>
                            <div className="detalhes-item">
                                <div><b>Nome Completo:  </b>{this.props.nome}</div>
                                <div><b>Nome Social:  </b>{this.props.nomeSocial}</div>
                                <div><b>Email:  </b>{this.props.email}</div>

                            </div>                            
                        </div>
                        <div className="detalhes">
                            <h3>Telefones</h3>
                            <div className="detalhes-item">
                                {this.props.telefones.map((t, i) => { return <div><b>Telefone {i+1}:  </b>({t.ddd}) {t.numero}</div> })}                        
                            </div>
                        </div>
                        <div className="detalhes">
                            <h3>Endereço</h3>
                            <div className="detalhes-item">
                                <div><b>Rua:  </b>{this.props.rua}</div>
                                <div><b>Número:  </b>{this.props.numero}</div>
                                <div><b>Bairro:  </b>{this.props.bairro}</div>
                                <div><b>Cidade:  </b>{this.props.cidade}</div>
                                <div><b>Estado:  </b>{this.props.estado}</div>
                                <div><b>Código Postal:  </b>{this.props.cep}</div>
                                <div><b>Informações adicionais:  </b>{this.props.info}</div>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}