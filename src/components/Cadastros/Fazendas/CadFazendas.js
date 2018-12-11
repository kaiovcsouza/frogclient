import React, { Component } from "react";
import Modal from "../../Modal/Modal";
import CadTalhao from "./CadTalhao";
import { connect } from "react-redux";
import { setFieldsFazendas } from "../../../actions.js";
import "./CadFazendas.css";

const mapStateToProps = state => {
  return {
    faznom: state.changeFieldsFazenda.faznom,
    fazcnpj: state.changeFieldsFazenda.fazcnpj,
    fazinscestadual: state.changeFieldsFazenda.fazinscestadual,
    fazend: state.changeFieldsFazenda.fazend,
    fazbai: state.changeFieldsFazenda.fazbai,
    fazcomp: state.changeFieldsFazenda.fazcomp,
    fazcep: state.changeFieldsFazenda.fazcep,
    fazcoord: state.changeFieldsFazenda.fazcoord,
    faztel: state.changeFieldsFazenda.faztel,
    fazprop: state.changeFieldsFazenda.fazprop
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFormChange: event =>
      dispatch(setFieldsFazendas(event.target.name, event.target.value))
  };
};

class CadFazendas extends Component {
  constructor() {
    super();
    this.state = {
      isAreaOpen: false
    };
  }

  toggleModal = () => {
    this.setState(state => ({
      ...state,
      isAreaOpen: !state.isAreaOpen
    }));
  };

  render() {
    const { isAreaOpen } = this.state;
    const { onFormChange } = this.props;
    return (
      <div>
        {isAreaOpen && (
          <Modal>
            <CadTalhao toggleModal={this.toggleModal} />
          </Modal>
        )}
        <fieldset className="formcadfaz">
          <legend className="formcadfaz__title">Fazendas</legend>
          <div className="input_container">
            <div className="group">
              <input
                type="text"
                name="faznom"
                onChange={onFormChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Fazenda</label>
            </div>
          </div>
          <div className="input_container half" style={{ marginRight: "2%" }}>
            <div className="group">
              <input
                type="text"
                name="fazcnpj"
                onChange={onFormChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>CNPJ</label>
            </div>
          </div>
          <div className="input_container half">
            <div className="group">
              <input
                type="text"
                name="fazinscestadual"
                onChange={onFormChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Inscrição Estadual</label>
            </div>
          </div>
          <div className="input_container areabtn">
            <button className="btnmodal" onClick={this.toggleModal}>
              Definir área total (ha)
            </button>
          </div>
          <div className="input_container half" style={{ marginRight: "2%" }}>
            <div className="group">
              <input
                type="text"
                name="fazend"
                onChange={onFormChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Endereço</label>
            </div>
          </div>
          <div className="input_container half">
            <div className="group">
              <input
                type="text"
                name="fazbai"
                onChange={onFormChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Bairro</label>
            </div>
          </div>
          <div className="input_container third" style={{ marginRight: "1%" }}>
            <div className="group">
              <input
                type="text"
                name="fazcomp"
                onChange={onFormChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Complemento</label>
            </div>
          </div>
          <div className="input_container third" style={{ marginRight: "1%" }}>
            <div className="group">
              <input
                type="text"
                name="fazcep"
                onChange={onFormChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>CEP / CX Postal</label>
            </div>
          </div>
          <div className="input_container third">
            <div className="group">
              <input
                type="text"
                name="fazcoord"
                onChange={onFormChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Coordenadas</label>
            </div>
          </div>
          <div className="input_container half" style={{ marginRight: "2%" }}>
            <div className="group">
              <input
                type="text"
                name="faztel"
                onChange={onFormChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Telefone</label>
            </div>
          </div>
          <div className="input_container half">
            <div className="group">
              <input
                type="text"
                name="fazprop"
                onChange={onFormChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Proprietário</label>
            </div>
          </div>
          <div
            style={{ display: "block", marginTop: "2rem", textAlign: "center" }}
          >
            <button className="btncad">Cadastrar</button>
          </div>
        </fieldset>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CadFazendas);
