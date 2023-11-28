/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import Cliente from "./cliente";

type props = {
    tema: string
}

export default class ListaCliente extends Component<props>{
    clientes = [
        {id: 1, nome: 'Iago Cardoso', nomeSocial: 'Iago Cardoso', cpf: '123.456.789-10', email: 'iago@gmail.com'},
        {id: 2, nome: 'Mariana Izumi', nomeSocial: 'Mariana Izumi', cpf: '123.456.789-11', email: 'mari@gmail.com'}
    ]
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {this.clientes.map(c => {
                        return (
                            <Cliente key={c.id}
                                id={c.id}
                                nome={c.nome}
                                nomeSocial={c.nomeSocial}
                                email={c.email}/>
                        )
                    })}
                    
                    {/* <a href="#" className="list-group-item list-group-item-action">Cliente 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 3</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }} >Cliente 4</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 5</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 6</a> */}
                </div>
            </div>
        )
    }
}