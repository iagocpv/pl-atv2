import { Component } from "react";
import "./style.css"

type props = {
    seletorView: Function
}

export default class Cadastro extends Component<props>{

    render() {
        return(
            <>
                <h3 className="cadastro-title">O que deseja cadastrar?</h3>
                <div className="opcoes-cadastro">
                    <button onClick={(e) => this.props.seletorView('CadastroCliente', e)}>Clientes</button>
                    <button onClick={(e) => this.props.seletorView('CadastroPet', e)}>Pets</button>
                    <button onClick={(e) => this.props.seletorView('CadastroProduto', e)}>Produtos</button>
                    <button onClick={(e) => this.props.seletorView('CadastroServiço', e)}>Serviços</button>
                </div>
            </>
        )
    }

}