import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./CadTalhao.css";
let id = 1;
class CadTalhao extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      fazid: "",
      idtalhao: "",
      nomeTalhao: "",
      areaTalhao: "",
      variedadeTalhao: "",
      dtpTalhao: ""
    };
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.onDeleteRow = this.onDeleteRow.bind(this);
  }

  onFormChange = event => {
    switch (event.target.name) {
      case "nometalhao":
        this.setState({ nomeTalhao: event.target.value });
        break;
      case "areatalhao":
        this.setState({ areaTalhao: event.target.value });
        break;
      case "varitalhao":
        this.setState({ variedadeTalhao: event.target.value });
        break;
      case "dttalhao":
        this.setState({ dtpTalhao: event.target.value });
        break;
      default:
        return;
    }
  };

  onAddBtnClick(event) {
    event.preventDefault();
    let obj = [
      {
        id: id,
        talhao: this.state.nomeTalhao,
        area: this.state.areaTalhao,
        variedade: this.state.variedadeTalhao,
        dtplantio: this.state.dtpTalhao
      }
    ];
    this.setState({ data: this.state.data.concat(obj) });
    id += 1;
  }

  onDeleteRow = id => {
    if (window.confirm("Deseja deletar este talhão?")) {
      const index = this.state.data.findIndex(row => {
        return row.id === id;
      });
      this.state.data.splice(index, 1);
      this.setState({ data: this.state.data });
    }
  };

  render() {
    const { data } = this.state;
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
            onClick={() => this.onDeleteRow(props.original.id)}
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
          <form onSubmit={this.onAddBtnClick}>
            <div className="input_container half" style={{ marginRight: "1%" }}>
              <div className="group">
                <input
                  type="text"
                  name="nometalhao"
                  onChange={this.onFormChange}
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
                  onChange={this.onFormChange}
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
                  onChange={this.onFormChange}
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
                  onChange={this.onFormChange}
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
export default CadTalhao;
