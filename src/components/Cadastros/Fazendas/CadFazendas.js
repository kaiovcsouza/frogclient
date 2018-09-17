import React, { Component } from 'react';
import Inputs from '../../Utilities/Inputs/Inputs';
import './CadFazendas.css'

class CadFazendas extends Component {
    render() {
        return (
            <fieldset style={{ border: '1px solid black' }}>
                <legend style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>Fazendas</legend>
                <div className='input_container'>
                    <Inputs type='text' label='Fazenda' />
                </div>
                <div className='input_container third' style={{marginRight: '5rem'}}>
                    <Inputs type='text' label='CNPJ' />
                </div>
                <div className='input_container third' style={{marginRight: '5rem'}}>
                    <Inputs type='text' label='Inscrição Estadual' />
                </div>
                <div className='input_container third'>
                    <button onClick={this.props.toggleModal}>Area total Ha</button>
                </div>
                <div className='input_container'>
                    <Inputs type='text' label='Endereço' />
                </div>
                <div className='input_container'>
                    <Inputs type='text' label='Bairro' />
                </div>
                <div className='input_container'>
                    <Inputs type='text' label='Complemento' />
                </div>
                <div className='input_container'>
                    <Inputs type='text' label='CEP / CX Postal' />
                </div>
                <div className='input_container'>
                    <Inputs type='text' label='Coordenadas' />
                </div>
                <div className='input_container'>
                    <Inputs type='text' label='Telefone' />
                </div>
                <div className='input_container'>
                    <Inputs type='text' label='Proprietário' />
                </div>
                <div style={{ display: 'block', marginTop: '2rem', textAlign: "center" }}>
                    <button style={{ width: '150px', background: '#008CBA', textDecoration: 'none', borderRadius: '10px', border: 'none', padding: '0.5rem' }}>
                        Cadastrar
                    </button>
                </div>
            </fieldset>
        );
    }

}
export default CadFazendas;