/**
 * Created by alexanderzheka on 12/22/16.
 */

import React, {Component} from 'react';

class ContactIcon extends Component {

    render() {
        return (
            <li><a href={this.props.href}><img src={this.props.image} alt={this.props.href}/></a></li>
        )
    }
}

export default ContactIcon ;