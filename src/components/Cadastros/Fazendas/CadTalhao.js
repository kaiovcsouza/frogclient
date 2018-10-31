
import React, { Component } from "react";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class CadTalhao extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            nomeTalhao: '',
            areaTalhao: ''
        };
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
    }

    handleChange = event => {
        if (event.target.name === "nometalhao") {
            this.setState({ nomeTalhao: event.target.value });
        }
        if (event.target.name === "areatalhao") {
            this.setState({ areaTalhao: event.target.value });
        }
    }

    onAddBtnClick(event) {
        let obj = [{ talhao: this.state.nomeTalhao, area: this.state.areaTalhao }]
        this.setState({ data: [...this.state.data, ...obj] })
    }

    render() {
        const { data } = this.state;
        const columns = [{
            Header: 'Talhão',
            accessor: 'talhao'
        }, {
            Header: 'Área Cultivada(M²)',
            accessor: 'area',
        }]
        return (
            <div style={{ background: 'rgba(0,0,0,0.3)', position: "absolute", width: '100%', height: '1200px' }}>
                <div style={{ background: 'white', borderRadius: '5px', border: 'solid 1px black', width: '90%', display: 'absolute', margin: 'auto', marginTop: '4rem', zIndex: "200" }}>
                    <h2>Talhões</h2>
                    <div className='input_container half' style={{ marginRight: '1%', marginLeft: '0.5%' }}>
                        <div className="group">
                            <input type="text" name="nometalhao" value={this.state.firstName} onChange={this.handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Talhão</label>
                        </div>
                    </div>
                    <div className='input_container half'>
                        <div className="group">
                            <input type="text" name="areatalhao" value={this.state.lastName} onChange={this.handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Área cultivada</label>
                        </div>
                    </div>
                    <button className="btncad" onClick={this.onAddBtnClick}>Add</button>
                    <div>
                        <ReactTable data={data} columns={columns}
                            style={{height: '600px'}}
                            defaultPageSize={20}
                            className="-striped -highlight"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default CadTalhao;