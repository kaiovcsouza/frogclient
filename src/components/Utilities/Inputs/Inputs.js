import React from 'react';
import './Inputs.css';

const Inputs = (props) => {
    return (
        <div className="group">
            <input type={props.type} required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>{props.label}</label>
        </div>
    );
}

export default Inputs;