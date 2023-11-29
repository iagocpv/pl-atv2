/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import Cliente from "./cliente";
import { clientesSpring } from "./clientesSpring";

type props = {
    tema: string
}

export default class ListaCliente extends Component<props>{
    clientes = clientesSpring
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <h3 className="list-title">Clientes</h3>
                <div className="list-group">
                    {this.clientes.map(c => {
                        return (
                            <Cliente key={c.id}
                                id={c.id}
                                nome={c.nome}
                                nomeSocial={c.nomeSocial}
                                email={c.email}
                                rua={c.endereco.rua}
                                numero={c.endereco.numero}
                                bairro={c.endereco.bairro}
                                cidade={c.endereco.cidade}
                                estado={c.endereco.estado}
                                cep={c.endereco.codigoPostal}
                                info={c.endereco.informacoesAdicionais}
                                telefones={c.telefones}
                                />
                        )
                    })}
                </div>
            </div>
        )
    }
}