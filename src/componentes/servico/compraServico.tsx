import { Component } from "react"

type props = {
    tema: string
}


export default class CompraServico extends Component<props> {
    servicos = [
        {id: 1, nome: 'Serviço 1', valor: 10.00, quantidade: 5},
        {id: 2, nome: 'Serviço 2', valor: 15.00, quantidade: 10}
    ]

    render () {
        return (
            <>
                <div className="container-fluid">
                    <h3 className="list-title">O que deseja comprar?</h3>
                    <div className="list-group">
                        <div className="">
                            {this.servicos.map(s => {
                                return (
                                    <div className="list-group-item list-group-item-action item-listado" key={s.id}>
                                        <div className='conteudo'>
                                            <p>{s.id}</p>
                                            <p>{s.nome}</p>
                                            <p>R${s.valor}</p>
                                        </div>
                                        <div className="acao">
                                            <button className="btn btn-primary">Comprar</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}