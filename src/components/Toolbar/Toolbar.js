import React from 'react';
import './Toolbar.css';
const Toolbar = (props) => {
    return (
        <header className="toolbar">
            <nav className="tool_nav">
                <div></div>
                <div className="tool_logo"><a href="/">LOGO</a></div>
                <div className="tool-item">
                    <ul>
                        <li>
                            <a href="/">link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Toolbar;