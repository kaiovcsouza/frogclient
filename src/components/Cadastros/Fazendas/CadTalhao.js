
import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import './CadTalhao.css';

class CadTalhao extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            nomeTalhao: '',
            areaTalhao: '',
            variedadeTalhao: '',
            dtpTalhao: ''
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
        if (event.target.name === "varitalhao") {
            this.setState({ variedadeTalhao: event.target.value });
        }
        if (event.target.name === "dttalhao") {
            this.setState({ dtpTalhao: event.target.value });
        }
    }

    onAddBtnClick(event) {
        let obj = [
            {
                talhao: this.state.nomeTalhao,
                area: this.state.areaTalhao,
                variedade: this.state.variedadeTalhao,
                dtplantio: this.state.dtpTalhao
            }
        ]
        this.setState({ data: [...this.state.data, ...obj] })
    }

    render() {
        const { data } = this.state;
        const columns = [
            {
                Header: 'Talhão',
                accessor: 'talhao'
            },
            {
                Header: 'Variedade',
                accessor: 'variedade'
            },
            {
                Header: 'Área Cultivada(M²)',
                accessor: 'area',
            },
            {
                Header: 'Data Plantio',
                accessor: 'dtplantio'
            }
        ]
        return (
            <div >
                <div style={{ background: 'white', borderRadius: '5px', border: 'solid 1px black', width: '90%', margin: 'auto', marginTop: '4rem' }}>
                    <h2>Talhões</h2>
                    <div className='input_container half' style={{ marginRight: '1%', marginLeft: '0.5%' }}>
                        <div className="group">
                            <input type="text" name="nometalhao" onChange={this.handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Nome do talhão</label>
                        </div>
                    </div>
                    <div className='input_container half'>
                        <div className="group">
                            <input type="text" name="varitalhao" onChange={this.handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Variedade</label>
                        </div>
                    </div>
                    <div className='input_container half' style={{ marginRight: '1%', marginLeft: '0.5%' }}>
                        <div className="group">
                            <input type="number" name="areatalhao" onChange={this.handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Área cultivada (M²)</label>
                        </div>
                    </div>
                    <div className='input_container half'>
                        <div className="group">
                            <input id="idt" type="text" name="dttalhao" onChange={this.handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Data do plantio</label>
                        </div>
                    </div>
                    <div style={{margin: '1rem', textAlign: 'center'}}>
                        <button className="btncad" onClick={this.onAddBtnClick}>Add</button>
                    </div>
                    <div>
                        <ReactTable data={data} columns={columns}
                            style={{ height: '300px' }}
                            defaultPageSize={10}
                            className="-striped -highlight"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default CadTalhao;