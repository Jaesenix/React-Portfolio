import React, { Component } from "react";

class Portfolio extends Component {
    render() {

        const array = ["Plants", "Cooking", "Fitness", "Employee", "Budget", "Password"];

        const images = array.map(image => {
            return <img src=".{image}.jpg" className="img-responsive" alt="" />
        });

        return (
            <section id="two">
                <h2>Recent Work</h2>
                <div className="row">
                    <article className="col-6 col-12-xsmall work-item">
                        {images}
                        {/* <a href="images/fulls/01.jpg" className="image fit thumb"><img src="images/thumbs/01.jpg" alt="" /></a> */}
                        <h3>Magna sed consequat tempus</h3>
                        <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                    </article>
                </div>
            </section>
        );
    }
}

export default Portfolio