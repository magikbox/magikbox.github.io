import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import Categories from '../components/Careers/Categories';
import CountBanner from '../components/Careers/CountBanner/CountBanner';

class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locationName: ''
        }

    }

    componentDidMount() {
<<<<<<< HEAD
        console.log("this.props", this.props)
        this.props.history.replace((this.props.location.pathname === "/location/" ? "/location" : this.props.location.pathname) + this.props.location.search)
=======
>>>>>>> 181b6faccd042051fa4f17cf293d1141e64c2fb2
        const urlLocationName = window.location.search.split('&')[0].split('=')[1]
        this.setState({
            locationName: urlLocationName.toLowerCase(),
        })
    }

    getLocationName = () => {
        let locationName = ''
        if (typeof window !== `undefined`) {
            locationName = window.location.search.split('&')[0].split('=')[1].toLowerCase()
        }
        return locationName
    }

    render() {
<<<<<<< HEAD
        console.log("this.getLocationName()", this.getLocationName())
=======
        console.log("this.getLocationName()",this.getLocationName())
>>>>>>> 181b6faccd042051fa4f17cf293d1141e64c2fb2
        return (
            <div className="first-section">
                <Helmet>
                    <title>GO-JEK Careers: Check out the current job openings at GO-JEK Tech</title>
                    <meta property="og:title" content="GO-JEK Careers: Check out the current job openings at GO-JEK Tech" />
                    <meta name="twitter:title" content="GO-JEK Careers: Check out the current job openings at GO-JEK Tech" />
                    <meta name="description" content="GO-JEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
                    <meta name="twitter:description" content="GO-JEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
                    <meta property="og:description" content="GO-JEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
                </Helmet>
                <div className="d-md-none">
                    <img src={`../../images/careers/${this.getLocationName()}-banner.png`} className="img-fluid" />
                </div>
                <CountBanner bannerImage={`${this.getLocationName()}-banner`} height="75vh" />
                <Categories props={this.props} />
            </div>

        );
    }
}

export default Location;
