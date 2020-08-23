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
                
                        <a href="https://plantpartner.herokuapp.com/">
                            <img id="plants" src={Plants} alt="plants" />
                            <p className="img1">Plant Partner</p>
                        </a>
                      
                        <a href="https://jaesenix.github.io/CuEARated-Cuisine/">
                            <img id="cooking" src={Cooking} alt="birds eye view of people chopping vegetables and prepping to cook " />
                            <p className="img2">CuEARated Cuisine</p>
                        </a>
                    
                        <a href="https://my-fitnesstracker.herokuapp.com/?id=5f2d92ff7e52d50017b064f1">
                            <img id="fitness" src={Fitness} alt="blurry shot of someone rattling battle ropes in gym" />
                            <p className="img3">Fitness Tracker</p>
                        </a>

                        <a href="https://jaesenix.github.io/React-Employee-Directory/">
                            <img id="employee" src={Employee} alt="back of empty office chairs lined up in a row" />
                            <p className="img4">Employee Tracker</p>
                        </a>

                        <a href="https://on-off-budget-trackers.herokuapp.com/">
                            <img id="budget" src={Budget} alt="birds eye view of papers showing budget lists" />
                            <p className="img5">Budget Trackers</p>
                        </a>

                        <a href="https://jaesenix.github.io/Password-Generator/">
                            <img id="password" src={Password} alt="laptop screen showing green and black code" />
                            <p className="img6">Password Generator</p>
                        </a>

                    </article>
                </div>
            </div>
        )
    }
}

export default Portfolio;