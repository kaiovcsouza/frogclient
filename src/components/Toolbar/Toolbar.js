import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = (props) => {
    return (
        <header className="toolbar">
            <nav className="tool_nav">
                <div>
                    <DrawerToggleButton click={props.handleDrawerClick}/>
                </div>
                <div className="tool_logo"><a href="/">LOGO</a></div>
                <div className="spacer"></div>
                <div className="tool_item">
                    <ul>
                        <li><a href="/">link</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Toolbar;