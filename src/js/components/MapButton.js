/**
 * Created by alexanderzheka on 12/22/16.
 */
import React, {Component} from 'react';

class MapButton extends Component {
    render() {
        return (
            <a onClick={() => this.props.onClick()} className="map_link">
                <span>{this.props.buttonText}</span>
            </a>
        )
    }
}

export default MapButton;