/**
 * Created by alexanderzheka on 1/4/17.
 */

import React, {Component} from 'react';
import Menu from '../../components/Menu';
import LogoBlock from '../../components/LogoBlock';
import Slider from 'react-slick';
import { WithContext as ReactTags } from 'react-tag-input';
import ReactPlayer from 'react-player';

class TV extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [
                {
                    id: 1,
                    text: "US Open"
                },
                {
                    id: 2,
                    text: "Alps"
                },
                {
                    id: 3,
                    text: "Austria"
                },
                {
                    id: 4,
                    text: "Stockholm"
                },
                {
                    id: 5,
                    text: "Oslo"
                },
            ],
            videos: [
                "https://youtu.be/N2CWCJJilfk",
                "https://youtu.be/EMVPpPE_Bx4",
                "https://youtu.be/OW_UMomgs6U",
                "https://youtu.be/FC1Bfn_RFJU",
                "https://youtu.be/N2CWCJJilfk",
                "https://youtu.be/EMVPpPE_Bx4",
                "https://youtu.be/OW_UMomgs6U",
                "https://youtu.be/FC1Bfn_RFJU",
                "https://youtu.be/N2CWCJJilfk",
                "https://youtu.be/EMVPpPE_Bx4",
                "https://youtu.be/OW_UMomgs6U",
                "https://youtu.be/FC1Bfn_RFJU",
            ]
        }
    }

    render() {

        let slides = [
            {
                "image": require('../../../img/pic/tv_page_bg.jpg')
            }
        ];

        // Slider initial settings
        let settings = {
            arrows: false,
            autoplay: false
        };

        // Slider component
        let slider = <section className="map-container">
            <section>
                <Slider {...settings}>
                    {(slides.map(function (slide, i) {
                        return <div key={i}><img src={slide.image} alt=""/></div>
                    }))}
                </Slider>
            </section>
        </section>;

        return (
            <div className="wrapper">
                <header className="header">
                    <LogoBlock image={require('../../../img/pic/logo.png')}/>
                    <Menu />
                </header>
                <section className="tv-header">
                    {slider}
                    <div className="row container">
                        <div className="col-xs-12 col-md-9">
                            <h1>Golf & Ski TV</h1>
                        </div>
                        <div className="col-xs-12 col-md-3 text-right">
                            <div className="row sortBox">
                                Sort By &nbsp;
                                <select>
                                    <option> Latest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row container">
                        <div className="col-xs-hidden col-md-2">
                            <div className="searchBox form-group">
                                <div >
                                    <span className="h4">Search</span>
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div className="categoryBox form-group">
                                <div className="">
                                    <span className="h4">Category</span>
                                </div>
                                <div>
                                    <select>
                                        <option>Golf</option>
                                        <option>Ski</option>
                                    </select>
                                </div>
                            </div>
                            <div className="tagBox form-group">
                                <div>
                                    <span className="h4">Trending words</span>
                                </div>
                                <div className="form-group">
                                <ReactTags tags={this.state.tags}
                                           readOnly={true}
                                           classNames={{
                                               tags: 'tagsClass',
                                               tagInput: 'tagInputClass',
                                               tagInputField: 'tagInputFieldClass',
                                               selected: 'selectedClass',
                                               tag: 'tagClass',
                                               remove: 'removeClass',
                                               suggestions: 'suggestionsClass'}}
                                           />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-10">
                            <div className="row">
                                    {this.state.videos.map( (video, key) => {
                                        return <div className="col-md-3 col-xs-6 videoBox">
                                            <ReactPlayer key={key} width="100%" height="240px" url={video} />
                                        </div>
                                    })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }

}

export default TV;