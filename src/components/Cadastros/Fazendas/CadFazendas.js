import React, { Component } from 'react';
import Modal from '../../Modal/Modal';
import CadTalhao from './CadTalhao';
import './CadFazendas.css'

const fieldValues = {
    faznom: '',
    fazcnpj: '',
    fazinscestadual: '',
    fazareatot: '',
    fazend: '',
    fazbai: '',
    fazcomp: '',
    fazcep: '',
    fazcoord: '',
    faztel: '',
    fazprop: '',
}

class CadFazendas extends Component {
    constructor() {
        super();
        this.state = {
            fieldValues,
            isAreaOpen: false
        };
    }

    toggleModal = () => {
        this.setState(state => ({
            ...state,
            isAreaOpen: !state.isAreaOpen,
        }));
    }

    render() {
        const { isAreaOpen } = this.state
        return (
            <div>
                {
                    isAreaOpen &&
                    <Modal>
                        <CadTalhao toggleModal={this.toggleModal} />
                    </Modal>
                }
                <fieldset style={{ border: '1px solid black' }}>
                    <legend style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>Fazendas</legend>
                    <div className='input_container'>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Fazenda</label>
                        </div>
                    </div>
                    <div className='input_container third' style={{ marginRight: '5rem' }}>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>CNPJ</label>
                        </div>
                    </div>
                    <div className='input_container third' style={{ marginRight: '5rem' }}>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Inscrição Estadual</label>
                        </div>
                    </div>
                    <div className='input_container third'>
                        <button onClick={this.toggleModal}>Área total (ha)</button>
                    </div>
                    <div className='input_container'>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Endereço</label>
                        </div>
                    </div>
                    <div className='input_container'>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Inscrição Bairro</label>
                        </div>
                    </div>
                    <div className='input_container'>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Complemento</label>
                        </div>
                    </div>
                    <div className='input_container'>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>CEP / CX Postal</label>
                        </div>
                    </div>
                    <div className='input_container'>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Coordenadas</label>
                        </div>
                    </div>
                    <div className='input_container'>
                    <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Telefone</label>
                        </div>
                    </div>
                    <div className='input_container'>
                    <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Proprietário</label>
                        </div>
                    </div>
                    <div style={{ display: 'block', marginTop: '2rem', textAlign: "center" }}>
                        <button style={{ width: '150px', background: '#008CBA', textDecoration: 'none', borderRadius: '10px', border: 'none', padding: '0.5rem' }}>
                            Cadastrar
                    </button>
                    </div>
                </fieldset>
            </div>
        );
    }

}
export default CadFazendas;