import React, { Component } from "react";

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-work" data-section="work">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Work</span>
                                <h2 className="colorlib-heading animate-box">Projects</h2>
                                <div className="row">
                                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                        <div className="project" style="background-image: url(images/img-1.jpg;">
                                          <h3><a href="work.html"></a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Portfolio