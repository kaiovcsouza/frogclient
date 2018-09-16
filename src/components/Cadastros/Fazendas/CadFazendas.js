import React, { Component } from 'react';

import './CadFazendas.css'

class CadFazendas extends Component {
    render() {
        return (
            <fieldset style={{ border: 'none' }}>
                <legend style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>Fazenda</legend>
                <div style={{ display: 'inline-block' }}>
                    <div class="group">
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Fazenda</label>
                    </div>
                </div>
                <div style={{ display: 'inline-block', marginLeft: '5rem' }}>
                    <div class="group">
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>CNPJ</label>
                    </div>
                </div>

                <div style={{ display: 'inline-block' }}>
                    <div class="group">
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Inscrição Estadual</label>
                    </div>
                </div>
                <div style={{ display: 'inline-block', marginLeft: '5rem' }}>
                    <div class="group">
                        <input type="number" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Área Total (ha)</label>
                    </div>
                </div>
                <div style={{ display: 'inline-block' }}>
                    <div class="group">
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Endereço</label>
                    </div>
                </div>
                <div style={{ display: 'inline-block', marginLeft: '5rem' }}>
                    <div class="group">
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Bairro</label>
                    </div>
                </div>
                <div style={{ display: 'inline-block' }}>
                    <div class="group">
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Complemento</label>
                    </div>
                </div>
                <div style={{ display: 'inline-block', marginLeft: '5rem' }}>
                    <div class="group">
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>CEP/CX Postal</label>
                    </div>
                </div>
                <div style={{ display: 'inline-block' }}>
                    <div class="group">
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Coordenadas</label>
                    </div>
                </div>
                <div style={{ display: 'inline-block', marginLeft: '5rem' }}>
                    <div class="group">
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Telefone</label>
                    </div>
                </div>
                <div style={{ display: 'inline-block' }}>
                    <div class="group">
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Proprietário</label>
                    </div>
                </div>
                <div style={{ display: 'block', marginTop: '2rem', textAlign: "center"}}>
                    <button style={{width: '150px', background: '#008CBA', textDecoration: 'none', borderRadius: '10px', border: 'none', padding: '0.5rem'}}>
                    Cadastrar
                    </button>
                </div>
            </fieldset>
        );
    }

}
export default CadFazendas;