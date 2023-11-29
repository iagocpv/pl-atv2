import { Component } from "react"
import Pet from "./pet"

type props = {
    tema: string
}

export default class ListaPet extends Component<props> {
    pets = [
        {id: 1, nome: 'Pet 1', tipo: 'Cachorro', raca: 'Caramelo', idDono: 1},
        {id: 2, nome: 'Pet 2', tipo: 'Cachorro', raca: 'Caramelo', idDono: 2}
    ]
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <h3 className="list-title">Pets</h3>
                <div className="list-group">
                    {this.pets.map(p => {
                        return (
                            <Pet key={p.id}
                            id={p.id}
                            nome={p.nome}
                            tipo={p.tipo}
                            raca={p.raca}
                            idDono={p.idDono}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}