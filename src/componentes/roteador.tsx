import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./cliente/listaClientes";
import FormularioCadastroCliente from "./cliente/formularioCadastroCliente";
import ListaPet from "./pet/listaPet";
import ListaProdutos from "./produto/listaProdutos";
import ListaServicos from "./servico/listaServicos";
import Cadastro from "./cadastro";
import FormularioCadastroPet from "./pet/formularioCadastroPet";
import FormularioCadastroProduto from "./produto/formularioCadastroProduto";
import FormularioCadastroServico from "./servico/formularioCadastroServico";
import Compra from "./compra";
import CompraProduto from "./produto/compraProduto";
import CompraServico from "./servico/compraServico";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Cadastros', 'Compras' ]} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPet tema="#e3f2fd"></ListaPet>
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="#e3f2fd"></ListaProdutos>
                </>
            )
        }  else if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="#e3f2fd"></ListaServicos>
                </>
            )      
        }  else if (this.state.tela === 'CadastroCliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd"></FormularioCadastroCliente>
                </>
            ) 
        }  else if (this.state.tela === 'CadastroPet') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroPet tema="#e3f2fd"></FormularioCadastroPet>
                </>
            ) 
        }  else if (this.state.tela === 'CadastroProduto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#e3f2fd"></FormularioCadastroProduto>
                </>
            ) 
        }  else if (this.state.tela === 'CadastroServiço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#e3f2fd"></FormularioCadastroServico>
                </>
            ) 
         } else if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <Cadastro seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Compras') {
            return (
                <>
                    {barraNavegacao}
                    <Compra seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'CompraProduto') {
            return (
                <>
                    {barraNavegacao}
                    <CompraProduto tema="#e3f2fd"/>
                </>
            )
        } else if (this.state.tela === 'CompraServico') {
            return (
                <>
                    {barraNavegacao}
                    <CompraServico tema="#e3f2fd"/>
                </>
            )
        }
    }
}