import { Component } from "react";
import "./style.css"

type props = {
    seletorView: Function
}

export default class Compra extends Component<props>{

    render() {
        return(
            <>
                <h3 className="cadastro-title">O que deseja comprar?</h3>
                <div className="opcoes-cadastro">
                    <button onClick={(e) => this.props.seletorView('CompraProduto', e)}>Produtos</button>
                    <button onClick={(e) => this.props.seletorView('CompraServico', e)}>Serviços</button>
                </div>
            </>
        )
    }

}