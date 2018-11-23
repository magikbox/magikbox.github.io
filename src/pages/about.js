import React from 'react';
import $ from 'jquery';

class About extends React.Component {
    componentWillMount() {
        $(document).ready(function() {
            $('#pagepiling').pagepiling({
                menu: null,
                direction: 'vertical',
                verticalCentered: true,
                sectionsColor: ['#009944', '#fff', '#fff', '#fff','#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                anchors: [],
                scrollingSpeed: 700,
                easing: 'swing',
                loopBottom: false,
                loopTop: false,
                css3: true,
                navigation: {
                    'textColor': '#000',
                    'bulletsColor': '#fff',
                    'position': 'right'
                },
                normalScrollElements: null,
                normalScrollElementTouchThreshold: 5,
                touchSensitivity: 5,
                keyboardScrolling: true,
                sectionSelector: '.section',
                animateAnchor: false,
        
                //events
                onLeave: function(index, nextIndex, direction){},
                afterLoad: function(anchorLink, index){},
                afterRender: function(){},
            });
        });
    }
    render() {
        return(
            <div className="first-section" id="pagepiling">
            
            <div className="d-flex flex-row section">
                <div className="text-center">
                    < h3 className="text-white py-5 text-uppercase raleway-extrabold" style={{ letterSpacing: "5px"}}> Go-jek is indonesia’ s <
                        br / > first & only unicorn </h3>
                
                    <img className="img-fluid" src="../images/about/one.png" />
                </div>

            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-md-4 col-8">
                    <img className="img-fluid" src="../images/about/local-ojeks.png" />
                </div>
                <div className="col-md-3 col-8 text-center text-md-left">
                    <p className="text-green ">IN 2010</p>
                    < p className = "" > GO - JEK started with a mission to improve the livelihoods of local ojeks(motorcycle taxis) 
                    </p>
                </div>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-md-3 col-8 text-center text-md-left">
                    <p className="text-green ">In the beginning</p>
                    <p className="">Every customer was ‘matched’ manually with a driver via a call center. </p>
                </div>
                <div className="col-md-4 col-8">
                    <img className="img-fluid" src="../images/about/customer-care.png" />
                </div>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-md-4 col-8">
                    <img className="img-fluid" src="../images/about/automated-machine.png" />
                </div>
                <div className="col-md-3 col-8 text-center text-md-left">
                    <p className="text-green ">IN 2015</p>
                    <p className="">A version of the app was launched to automate the matchmaking</p>
                </div>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-md-3 col-8 text-center text-md-left">
                    <p className="text-green ">By mid-2015</p>
                    <p className="">Orders scaled from <strong>3,000 to 100,000 </strong>a day. GO-JEK was becoming indispensable. By end of 2015 - systems were crashing because of a major spike in volumes</p>
                </div>
                <div className="col-md-4 col-8">
                    <img className="img-fluid" src="../images/about/scaled-order.png" />
                </div>

            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-md-4 col-8">
                    <img className="img-fluid" src="../images/about/niranjan-paranjape.png" />
                </div>
                <div className="col-md-3 col-8 text-center text-md-left">
                    <p className="text-green ">End of 2015</p>
                    <p className="">Niranjan Paranjape  rewrote a key piece of technology in golang in under 3 days. </p>
                    <button className="btn btn-success btn-sm text-uppercase px-5">read his story here</button>
                </div>
            </div>
            
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-md-4 col-8">
                    <img className="img-fluid" src="../images/about/driver-partners.png" />
                </div>
                <div className="col-md-3 col-8 text-center text-md-left">
                    <p className="text-green ">Happy Driver Partners</p>
                    <p className="">Driver incomes increased by 150% making GO-JEK
                    a reliable partner  </p>
                </div>

            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-md-3 col-8 text-center text-md-left order-sm-1">
                    <p className="text-green ">In mid-2016</p>
                    <p className="">In mid-2016, downtimes were a routine affair. Leaky faucets needed to be fixed.</p>
                </div>
                <div className="col-md-4 col-8">
                    <img className="img-fluid" src="../images/about/issue.png" />
                </div>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-md-3 col-8 text-center text-md-left order-sm-1">
                    <p className="text-green ">The big rewrite began in 2016</p>
                    <p className="">“No project has a budget and impact as big as this in GO-JEK’s history” - From Nadiem’s internal mail..</p>
                    <button className="btn btn-success btn-sm text-uppercase px-5">read the story here</button>
                </div>
                <div className="col-md-4 col-8">
                    <img className="img-fluid" src="../images/about/big-rewrite.png" />
                </div>
            </div>
            
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-md-3 col-8 text-center text-md-left order-sm-1">
                    <p className="text-green ">Employment opportunities.</p>
                    <p className="">GO-JEK employs more than 30,000 people with disabilities.</p>
                    <button className="btn btn-success btn-sm text-uppercase px-5">read the story here</button>
                </div>
                <div className="col-md-4 col-8">
                    <img className="img-fluid" src="../images/about/employees.png" />
                </div>
            </div>
            
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-md-3 col-8 text-center text-md-left order-sm-1">
                    <p className="text-green ">As of 2018</p>
                    <p className="">GO-JEK does 100+ million orders across 18+ products Total order volume growth - 6600x </p>
                </div>
                <div className="col-md-4 col-8">
                    <img className="img-fluid" src="../images/about/10-million-orders.png" />
                </div>
            </div>

        </div>
        );
    }
} 

export default About;