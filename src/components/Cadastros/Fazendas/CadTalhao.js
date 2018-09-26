import React, { Component } from 'react';


class CadTalhao extends Component {
    constructor(props) {
        super(props);
        this.state = { inputList: [] };
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
        this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
    }

    onAddBtnClick(event) {
        const inputList = this.state.inputList;
        this.setState({
            inputList: inputList.concat(
            <div className="group"><input key={this.state.inputList} type="text" required /><span className="highlight"></span>
            <span className="bar"></span><label>{"Talhão "+this.state.inputList.length}</label></div>
            )
            });
    }
    onRemoveBtnClick(event) {
        const inputList = this.state.inputList;
        this.setState({
            inputList: inputList.slice(0, this.state.inputList.length - 1)
        });
    }

    render() {
        return (
            <div className='bgmodal'>
                <div style={{ background: 'white', borderRadius: '10px', width: '60%', display: 'absolute', margin: 'auto' }}>
                    <fieldset style={{ border: 'none', marginTop: '4rem' }}>
                        <legend style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>Área total da fazenda</legend>
                        {this.state.inputList}
                        <button style={{ width:'40px', padding: '0.5rem', background: '#008CBA', textDecoration: 'none', border: 'none' }} onClick={this.onAddBtnClick}>+</button>
                        <button style={{ width:'50px', padding: '0.5rem', background: '#008CBA', textDecoration: 'none', border: 'none' }} onClick={this.onRemoveBtnClick}>-  </button>
                    </fieldset>
                </div>
            </div>
        );
    }
}
export default CadTalhao;