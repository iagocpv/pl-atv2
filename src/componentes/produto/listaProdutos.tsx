import { Component } from "react"
import Produto from "./produto"


type props = {
    tema: string
}

export default class ListaProdutos extends Component<props> {
    produtos = [
        {id: 1, nome: 'Produto 1', valor: 10.00, quantidade: 5},
        {id: 2, nome: 'Produto 2', valor: 15.00, quantidade: 10}
    ]
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <h3 className="list-title">Produtos</h3>
                <div className="list-group">
                    {this.produtos.map(p => {
                        return (
                            <Produto key={p.id}
                            id={p.id}
                            nome={p.nome}
                            valor={p.valor}
                            quantidade={p.quantidade}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}