import React, { Component } from "react";
import ReactTable from "react-table";
import { connect } from "react-redux";
import { setFields, setDataTable, deleteDataTable } from "../../../actions";
import "react-table/react-table.css";
import "./CadTalhao.css";
let id = 1;

const mapStateToProps = state => {
  return {
    nomeTalhao: state.changeFields.nomeTalhao,
    areaTalhao: state.changeFields.areaTalhao,
    variedadeTalhao: state.changeFields.variedadeTalhao,
    dtpTalhao: state.changeFields.dtpTalhao,
    data: state.changeDataTable.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFormChange: event =>
      dispatch(setFields(event.target.name, event.target.value)),
    onAddBtnClick: (id, talhao, area, variedade, dtplantio) =>
      dispatch(setDataTable(id, talhao, area, variedade, dtplantio)),
    onDeleteRow: id => {
      if (window.confirm("Deseja deletar este talhão?"))
        dispatch(deleteDataTable(id));
    }
  };
};

class CadTalhao extends Component {
  render() {
    const {
      onFormChange,
      data,
      onAddBtnClick,
      nomeTalhao,
      areaTalhao,
      variedadeTalhao,
      dtpTalhao,
      onDeleteRow
    } = this.props;
    const columns = [
      {
        Header: "Id",
        accessor: "id"
      },
      {
        Header: "Talhão",
        accessor: "talhao"
      },
      {
        Header: "Variedade",
        accessor: "variedade"
      },
      {
        Header: "Área Cultivada(M²)",
        accessor: "area"
      },
      {
        Header: "Data Plantio",
        accessor: "dtplantio"
      },
      {
        Header: "",
        accessor: "delete",
        Cell: props => (
          <div
            className="modal-close"
            onClick={() => onDeleteRow(props.original.id)}
          >
            &times;
          </div>
        ),
        width: 50
      }
    ];
    return (
      <div className="talhaomodal">
        <article
          style={{ background: "white", borderRadius: "5px", width: "95%" }}
        >
          <div
            style={{ display: "inline-block", width: "96%", marginLeft: "1%" }}
          >
            <h2>Talhões</h2>
          </div>
          <div className="modal-close" onClick={this.props.toggleModal}>
            &times;
          </div>
          <form
            onSubmit={event => {
              event.preventDefault();
              onAddBtnClick(
                id,
                nomeTalhao,
                areaTalhao,
                variedadeTalhao,
                dtpTalhao
              );
              id += 1;
            }}
          >
            <div className="input_container half" style={{ marginRight: "1%" }}>
              <div className="group">
                <input
                  type="text"
                  name="nometalhao"
                  onChange={onFormChange}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Nome do talhão</label>
              </div>
            </div>
            <div className="input_container half">
              <div className="group">
                <input
                  type="text"
                  name="varitalhao"
                  onChange={onFormChange}
                  required
                />
                <span className="highlight" />
                <span className="bar" />

                <label>Variedade</label>
              </div>
            </div>
            <div className="input_container half" style={{ marginRight: "1%" }}>
              <div className="group">
                <input
                  type="number"
                  name="areatalhao"
                  onChange={onFormChange}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Área cultivada (M²)</label>
              </div>
            </div>
            <div className="input_container half">
              <div className="group">
                <input
                  id="idt"
                  type="date"
                  name="dttalhao"
                  onChange={onFormChange}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label className="lbldata">Data do plantio</label>
              </div>
            </div>
            <div style={{ margin: "1rem", textAlign: "center" }}>
              <input className="btnadd" type="submit" value="Add" />
            </div>
          </form>
          <div>
            <ReactTable
              data={data}
              columns={columns}
              style={{ height: "360px" }}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </div>
        </article>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CadTalhao);
