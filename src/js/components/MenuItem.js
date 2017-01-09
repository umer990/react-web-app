/**
 * Created by alexanderzheka on 12/22/16.
 */

import React, { Component } from 'react';
import { Link } from 'react-router'


class MenuItem extends Component {
    render(){
        return(
            <li>
                <Link to={this.props.href}>{this.props.title}</Link>
            </li>
        )
    }
}

export default MenuItem;