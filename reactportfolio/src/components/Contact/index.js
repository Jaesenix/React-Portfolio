import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-contact" data-section="contact">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Get in Touch</span>
                                <h2 className="colorlib-heading">Contact</h2>
                                <div>
                                    <div className="colorlib-text">
                                        {/* /* global foo */ }
                                        <button onClick={foo} >Email: js@email.com</button>
                                        <p><a href="tel://">Ph: 123.456.7890</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-md-push-1">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name" />
                                                <input type="text" className="form-control" placeholder="Email" />
                                                <input type="text" className ="form-control" placeholder="Subject" />
                                                <textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message" />
                                            </div>
                                        </form>
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

export default Contact