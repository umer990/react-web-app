/**
 * Created by alexanderzheka on 12/22/16.
 */
import React, {Component} from 'react';
import FeatureItem from '../components/FeatureItem';

class FeatureList extends Component {

    render() {
        return (
            <section className="key-features">
                <div className="features-header">
                    App Features
                </div>
                <div className="features-icons">
                    <ul>
                        { this.props.features.map(function (feature, i) {
                            return (
                                <FeatureItem key={i} image={feature.image} description={feature.description} />
                            );
                        })
                        }
                    </ul>
                </div>
            </section>
        );
    }

}

export default FeatureList;