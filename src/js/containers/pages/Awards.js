import React, {Component} from 'react';
import Menu from '../../components/Menu';
import LogoBlock from '../../components/LogoBlock';

class Awards extends Component {

    render() {
        return (
            <div className="wrapper row">
                <header className="header">
                    <LogoBlock image={require('../../../img/pic/logo.png')}/>
                    <Menu />
                </header>
                <section className="awards">

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="text-center">
                                <img src={require('../../../img/pic/awards_image.png')} alt="awards logo + text"/>
                            </div>
                        </div>
                    </div>
                    <div className="row awards-button">
                        <div className="col-xs-12 text-center">
                            <a href="#" className="btn btn-primary btn-lg">Upload your video</a>
                        </div>
                    </div>
                    <div className="awards-description row">
                        <div className="col-xs-6 col-sm-3">
                            <p className="h4">
                                Win big by doing what you love!
                            </p>
                            <p>
                                Capture your best ski moments on video. That could mean action,
                                adventure, your most amazing catches, fun times you had with your crew or teammates,
                                or amazing ski days with family. And that’s just for starters.
                            </p>
                            <p>
                                GolfSkiWorld is about ski, adventure, and fun, so show us what you’ve got!
                            </p>
                            <p>
                                What do you have to do to take part? Submit your best video clips.
                                Keep them raw and unedited. Our superstar video editing crew will give the best
                                videos star treatment and make them jump off the screen.
                            </p>
                        </div>
                        <div className="col-xs-6 col-sm-3">
                            <p className="h4">
                                What’s in it for you?
                            </p>
                            <p>
                                You could be seen by millions of viewers worldwide.
                                We’ll also be giving out a constant stream of great prizes:
                            </p>
                            <ul>
                                <li>Instant winners will get cool GolfSkiWorld merchandise.</li>
                                <li>Monthly winners will get professional ski gear from the world’s
                                    best brands.
                                </li>
                                <li>Creators of the most amazing videos will become eligible for
                                    once­in­a­lifetime ski experiences with some of the world’s best ski guides.
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-sm-3">
                            <p className="h4">
                                How it works:
                            </p>
                            <p>
                                1. Capture ­
                            </p>
                            <p>
                                Get out there and capture your Ski interesting things will happen.
                            </p>
                            <p>
                                2. Submit ­
                            </p>
                            <p>
                                Submit your favorite raw clips for review.
                            </p>
                            <p>
                                3. Receive Awards ­
                            </p>
                            <p>
                                Winners get merchandise, gear, or once­in­a­lifetime ski experiences, as well as
                                global exposure.
                            </p>
                            <p>
                                4. Repeat ­
                            </p>
                            <p>
                                Get out there, do what you love, and record your ski best moments.
                            </p>
                        </div>
                        <div className="col-xs-6 col-sm-3">
                            <img className="image" src={require('../../../img/pic/awards-awards.png')} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default Awards;