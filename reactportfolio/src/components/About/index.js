import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                        <li style={{backgroundImage: 'url()'}}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                            <h1>Hi, <br />I'm Janella</h1>
                                            <h2>100% html5 boostrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                                            <p><a className="btn btn-primary btn-learn">Download CV <em className="icon-download4" /></a></p>        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default About