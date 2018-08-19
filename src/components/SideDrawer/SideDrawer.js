import React from 'react';

import './SideDrawer.css';

const SideDrawer = (props) => {
    let drawerClasses = ['sidedw'];

    if (props.show) {
        drawerClasses = ['sidedw', 'open'];
    }

    return (
       <nav className={drawerClasses.join(' ')}>
           <ul>
               <li><a href="/">Link</a></li>
           </ul>
       </nav> 
    );
}

export default SideDrawer;