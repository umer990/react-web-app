/**
 * Created by alexanderzheka on 12/22/16.
 */

import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {

    renderMenuItem(href, title){
        return <MenuItem href={href} title={title} />
    }

    render(){
        return(
            <ul className="header_menu">
                {this.renderMenuItem("/", "Home")}
                {this.renderMenuItem("/TV", "Golf&Ski TV")}
                {this.renderMenuItem("/awards", "Awards info")}
            </ul>
        )
    }
}

export default Menu;