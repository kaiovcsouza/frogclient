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

    onFormChange = event => {
        switch (event.target.name) {
            case 'faznom':
                this.setState({ faznom: event.target.value });
                break;
            case 'fazcnpj':
                this.setState({ fazcnpj: event.target.value });
                break;
            case 'fazinscestadual':
                this.setState({ fazinscestadual: event.target.value });
                break;
            case 'fazend':
                this.setState({ fazend: event.target.value });
                break;
            case '':
                this.setState({ fazbai: event.target.value });
                break;
            case 'fazcomp':
                this.setState({ fazcomp: event.target.value });
                break;
            case 'fazcep':
                this.setState({ fazcep: event.target.value });
                break;
            case 'fazcoord':
                this.setState({ fazcoord: event.target.value });
                break;
            case 'faztel':
                this.setState({ faztel: event.target.value });
                break;
            case 'fazprop':
                this.setState({ fazprop: event.arget.value });
                break;
            default:
                return;
        }
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
                <fieldset className="formcadfaz">
                    <legend className="formcadfaz__title">Fazendas</legend>
                    <div className='input_container'>
                        <div className="group">
                            <input type="text" name="faznom" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Fazenda</label>
                        </div>
                    </div>
                    <div className='input_container half' style={{ marginRight: '2%' }}>
                        <div className="group">
                            <input type="text" name="fazcnpj" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>CNPJ</label>
                        </div>
                    </div>
                    <div className='input_container half'>
                        <div className="group">
                            <input type="text" name="fazinscestadual" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Inscrição Estadual</label>
                        </div>
                    </div>
                    <div className='input_container areabtn'>
                        <button className="btnmodal" onClick={this.toggleModal}> Definir área total (ha)</button>
                    </div>
                    <div className='input_container half' style={{ marginRight: '2%' }}>
                        <div className="group">
                            <input type="text" name="fazend" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Endereço</label>
                        </div>
                    </div>
                    <div className='input_container half'>
                        <div className="group">
                            <input type="text" name="fazbai" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Bairro</label>
                        </div>
                    </div>
                    <div className='input_container third' style={{ marginRight: '1%' }}>
                        <div className="group">
                            <input type="text" name="fazcomp" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Complemento</label>
                        </div>
                    </div>
                    <div className='input_container third' style={{ marginRight: '1%' }}>
                        <div className="group">
                            <input type="text" name="fazcep" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>CEP / CX Postal</label>
                        </div>
                    </div>
                    <div className='input_container third'>
                        <div className="group">
                            <input type="text" name="fazcoord" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Coordenadas</label>
                        </div>
                    </div>
                    <div className='input_container half' style={{ marginRight: '2%' }}>
                        <div className="group">
                            <input type="text" name="faztel" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Telefone</label>
                        </div>
                    </div>
                    <div className='input_container half'>
                        <div className="group">
                            <input type="text" name="fazprop" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Proprietário</label>
                        </div>
                    </div>
                    <div style={{ display: 'block', marginTop: '2rem', textAlign: "center" }}>
                        <button className="btncad">
                            Cadastrar
                    </button>
                    </div>
                </fieldset>
            </div>
        );
    }

}
export default CadFazendas;