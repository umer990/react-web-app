/**
 * Created by alexanderzheka on 12/22/16.
 */

import React, {Component} from 'react';
import Slider from 'react-slick';
import Menu from '../../components/Menu';
import LogoBlock from '../../components/LogoBlock';
import MapButton from '../../components/MapButton';
import VideoBlock from '../../components/VideoBlock';
import ContactIconList from '../../components/ContactIconList';
import FeatureList from '../../components/FeatureList';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import Global from '../../Global';
import * as ReactDOMServer from "react-dom/lib/ReactDOMServer";


class Home extends Component {

    // This method will be called when someone change zoom/drag map
    async onBoundsChanged(map) {
        let bounds = map.getBounds();
        let data = await fetch(`${Global.API_URL}/geo`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({
                token: Global.API_TOKEN,
                latMin: bounds.getSouthWest().lat(),
                longMin: bounds.getSouthWest().lng(),
                latMax: bounds.getNorthEast().lat(),
                longMax: bounds.getNorthEast().lng(),
            })
        });
        let json = await data.json();
        this.setState({
            markers: json,
            center_lat: map.getCenter().lat(),
            center_lng: map.getCenter().lng(),
            zoom: map.getZoom()
        });
    }

    // Constructor - setup initial page state
    constructor(props) {
        super(props);
        this.state = {
            mapVisible: false,
            sliderVisible: true,
            map: null,
            center_lat: 57.709261,
            center_lng: 11.972944,
            zoom: 8,
            markers: [],
            info_lat: 0,
            info_lng: 0,
            info_show: false,
            info_description: "",
            info_icon: "",
            info_header: "",
            info_address: ""
        }
    }

    // Handle click on map button
    clickHandler(mapVisible, sliderVisible) {
        this.setState({
            mapVisible: (!mapVisible),
            sliderVisible: (!sliderVisible)
        });
    }

    // Handle click on custom marker on map
    async onMarkerClick(marker, info_visible) {
        let uri = "geo/show/" + marker.model + "/" + marker.id;
        let data = await fetch(`${Global.API_URL}/${uri}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: "GET"
        });
        let json = await data.json();
        console.log(json);
        this.setState({
            info_lat: marker.latitude,
            info_lng: marker.longitude,
            info_description: json.description,
            info_icon: json.thumbnail,
            info_header: json.name,
            info_address: json.street
        });
    }

    render() {

        // Slider initial settings
        let settings = {
            arrows: false,
            autoplay: true
        };

        // List of features, text and image refs
        let features = [
            {
                "image": require('../../../img/pic/features_1.png'),
                "description": "Find destinations"
            },
            {
                "image": require('../../../img/pic/features_2.png'),
                "description": "Last minute deals"
            },
            {
                "image": require('../../../img/pic/features_3.png'),
                "description": "Connect"
            },
            {
                "image": require('../../../img/pic/features_4.png'),
                "description": "Watch & upload photos and videos"
            },
            {
                "image": require('../../../img/pic/features_5.png'),
                "description": "Other brands"
            }
        ];

        // Slide image references
        let slides = [
            {
                "image": require('../../../img/pic/GSW_slide_2.png')
            },
            {
                "image": require('../../../img/pic/main-page-img.jpeg')
            },
            {
                "image": require('../../../img/pic/GSW_slide_3.png')
            },
            {
                "image": require('../../../img/pic/GSW_slide_5.png')
            },
            {
                "image": require('../../../img/pic/GSW_slide_6.png')
            }
        ];

        // Contact data and social links
        let contacts = [
            {
                "href": "#",
                "image": require('../../../img/sys/socials/facebook.png')
            },
            {
                "href": "#",
                "image": require('../../../img/sys/socials/instagram.png')
            },
            {
                "href": "#",
                "image": require('../../../img/sys/socials/mail.png')
            },
            {
                "href": "#",
                "image": require('../../../img/sys/socials/phone.png')
            },
            {
                "href": "#",
                "image": require('../../../img/sys/socials/twitter.png')
            }

        ];

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

        let markers = this.state.markers.map((marker) => {
            let markerImage;
            switch (marker.model) {
                case 'accommodation':
                    markerImage = require('../../../img/pic/marker_hotel@2x.png');
                    break;
                case 'restaurant':
                    markerImage = require('../../../img/pic/marker_restaurant@2x.png');
                    break;
                case 'resort':
                    if (marker.site_id === 1) {
                        markerImage = require('../../../img/pic/marker_golf@2x.png');
                    } else {
                        markerImage = require('../../../img/pic/marker_ski@2x.png');
                    }

                    break;
                default :
                    markerImage = require('../../../img/pic/marker_tent@2x.png');
            }

            return <Marker
                key={marker.latitude}
                lat={marker.latitude}
                lng={marker.longitude}
                draggable={false}
                onDragEnd={this.onDragEnd}
                icon={markerImage}
                onClick={() => {
                    this.onMarkerClick(marker, this.state.info_show)
                }}
            />
        });

        // Internal content for info window on map
        let info_content = <div className="info-window-container">
            <div className="info-window-container-header">{this.state.info_header}</div>
            <div>
                <img alt='place describing view' src={this.state.info_icon}/>
            </div>
            <div className="info-window-container-description">
                {this.state.info_description}
            </div>
            <hr />
            <div className="info-window-container-address">
                {this.state.info_address}
                <br />
                <a href="#">Read more</a>
            </div>
        </div>;

        // Info window object
        let info = <InfoWindow
            lat={this.state.info_lat}
            lng={this.state.info_lng}

            icon={this.state.info_icon}
            content={ReactDOMServer.renderToStaticMarkup(info_content)}
        />;

        /* Map component instance*/
        let map = <section>
            <Gmaps
                width={'100%'}
                height={'450px'}
                lat={this.state.center_lat}
                lng={this.state.center_lng}
                zoom={this.state.zoom}
                loadingMessage={'Be happy'}
                params={{v: '3.exp', key: 'AIzaSyCAK3bZF6_hjDkAOTn5yt0FdOBqKPZ_vJ8'}}
                onMapCreated={ (map) => {
                    this.setState({
                        map: map
                    })
                }}
                onBoundsChanged={() => this.onBoundsChanged(this.state.map)}
            >
                { markers }
                { (this.state.info_lat && this.state.info_lng) ? info : null}
            </Gmaps>
        </section>;

        // Main render functionality
        return (
            <div className="wrapper">
                <header className="header">
                    <LogoBlock image={require('../../../img/pic/logo.png')}/>
                    <Menu />
                </header>
                <MapButton onClick={() => {
                    this.clickHandler(this.state.mapVisible, this.state.sliderVisible)
                }  }
                           buttonText="Map"/>
                { (this.state.mapVisible) ? map : slider }
                <section className="content">
                    <FeatureList features={features}/>
                    <VideoBlock />
                </section>
                <footer className="footer">
                    <div className="footer_line"></div>
                    <p>2016 - GolfSkiWorld AB - All rights reserved</p>
                    <ContactIconList contacts={contacts}/>
                </footer>
                </div>
        );
    }
}

export default Home;
