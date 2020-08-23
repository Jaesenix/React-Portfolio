import React, { Component } from "react";
import "./style.css";

class About extends Component {
    render() {
        return (
            <div className="container">
            <div className="col-md-12">
            <section id="one">
                <header className="major">
                    <h2>About Me</h2>
                </header>
                <p className="about">Hi, my name is Janella. I am a Software Developer in Texas. I am analytical, enjoy solving problems, coding, and working with data.  </p>
                <p className="photoCred">Photo by Natanja Grun on Unsplash </p>
            </section>
            <div className="banner"></div>
            </div>
            </div>
        )
    }
}

export default About;