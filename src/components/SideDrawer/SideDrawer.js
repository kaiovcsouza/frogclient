import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

class SideDrawer extends Component {

    render() {
        let drawerClasses = ['sidedw'];

        if (this.props.show) {
            drawerClasses = ['sidedw', 'open'];
        }

        return (
            <nav className={drawerClasses.join(' ')}>
                <ul>
                    <li><Link to="/page1">Teste 1</Link></li>
                    <li><Link to="/page2">Teste 2</Link></li>
                    <li><Link to="/page3">Teste 3</Link></li>
                </ul>
            </nav>
        );
    }
}
export default SideDrawer;