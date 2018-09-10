import React, { Component } from "react";

import "./Resources.css";
export default class Resources extends Component {
  render() {
    return (
        <div>
            <h1>Resources</h1>
            <div className='resource-container'>
                <li class="resource-item">
                    <img src="https://financialtribune.com/sites/default/files/field/image/17january/12_mental_2.jpg" alt="" />
                    <div class="resource-title">
                        <h2>Mental Health & Substance Abuse</h2>
                        <section class="resource-details">
                        <span> Details</span>
                        </section>
                    </div>
                </li>
                <li class="resource-item">
                    <img src="https://financialtribune.com/sites/default/files/field/image/17january/12_mental_2.jpg" alt="" />
                    <div class="resource-title">
                        <h2>Support & Recovery</h2>
                        <section class="resource-details">
                            <span> Details</span>
                        </section>
                    </div>
                </li>
                <li class="resource-item">
                    <img src="https://financialtribune.com/sites/default/files/field/image/17january/12_mental_2.jpg" alt="" />
                    <div class="resource-title">
                        <h2>Domestic Violence / Sexual Assault</h2>
                        <section class="resource-details">
                            <span> Details</span>
                        </section>
                    </div>
                </li>
                <li class="resource-item">
                    <img src="https://financialtribune.com/sites/default/files/field/image/17january/12_mental_2.jpg" alt="" />
                    <div class="resource-title">
                        <h2>Resource Directories</h2>
                        <section class="resource-details">
                            <span> Details</span>
                        </section>
                    </div>
                </li>
          </div>
        </div>
    );
  }
}
