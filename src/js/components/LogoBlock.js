/**
 * Created by alexanderzheka on 12/22/16.
 */
import React, {Component} from 'react';

class LogoBlock extends Component {
    render() {
        return (
            <div className="header_logo-container">
                <img src={this.props.image} alt="Logo"/>
            </div>
        )
    }
}

export default LogoBlock;