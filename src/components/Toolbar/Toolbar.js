import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = (props) => {
    // const datelogon = new Date();
    return (
        <header className="toolbar">
            <nav className="tool_nav">
                <div>
                    <DrawerToggleButton click={props.handleDrawerClick} />
                </div>
                <div className="spacer"></div>
                <div className="tool_item">
                    <div className="ul">
                        <div className="li">
                            <img
                                src="http://tachyons.io/img/logo.jpg"
                                className="br-100 ba"
                                alt="avatar"
                                style={{ width: '2.5rem', height: '2.5rem' }}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Toolbar;