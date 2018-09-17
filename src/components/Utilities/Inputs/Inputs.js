import React from 'react';
import './Inputs.css';

const Inputs = (props) => {
    return (
        <div class="group">
            <input type={props.type} required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>{props.label}</label>
        </div>
    );
}

export default Inputs;