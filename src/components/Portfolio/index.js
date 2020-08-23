import React, { Component } from "react";
import Plants from "../../assets/images/plants.png";
import Cooking from "../../assets/images/cooking.png";
import Fitness from "../../assets/images/fitness.png";
import Employee from "../../assets/images/employee.png";
import Budget from "../../assets/images/budget.png";
import Password from "../../assets/images/password.png";
import "./style.css";

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <h2>Recent Work</h2>
                <div className="row">
                    <article className="col-6 col-12-xsmall work-item">
                        <img id="plants" src={Plants} alt="" />
                        <img id="cooking" src={Cooking} alt="" />
                        <img id="fitness" src={Fitness} alt="" />
                        <img id="employee" src={Employee} alt="" />
                        <img id="budget" src={Budget} alt="" />
                        <img id="password" src={Password} alt="" />
                    </article>
                </div>
            </div>
        )        
    }
}

export default Portfolio;