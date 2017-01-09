/**
 * Created by alexanderzheka on 12/22/16.
 */
import React, {Component} from 'react';

class VideoBlock extends Component {
    render() {
        return (
            <section className="videoInfo">
                <div className="video-header">
                    Last awarded movie
                </div>
                <div className="video-subheader">
                    See more on Golf&Ski TV
                </div>
                <div className="video-box">
                    <div className="video-handler">
                        <img alt="Tv screen" src={require('../../img/pic/tv_cover.png')}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default VideoBlock;