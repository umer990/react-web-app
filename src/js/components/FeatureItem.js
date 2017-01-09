/**
 * Created by alexanderzheka on 12/22/16.
 */
import React, {Component} from 'react';

class FeatureItem extends Component {

    render() {
        return (
            <li>
                <img alt={this.props.description} src={this.props.image}/>
                <br />
                <span className="feature-desc">
                    {this.props.description}
                </span>
            </li>
        );
    }
}

export default FeatureItem;