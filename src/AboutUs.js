import React, { Component } from "react";
import "./AboutUs.css";

class AboutUs extends Component {
render() {
    return(
        <div className="jumbotron jumbotron-fluid bg-white" id="jumbotron">
            <div className="container">          
            <img src='/bowtie_logo.jpg' className="img-thumbnail rounded float-left" alt=""/>
            <h1 className="display-4">About Us</h1>
            <p>
            Bow Tie Bartending was born out of a love for family, friends and knowing the value of time spent with those important in our lives.  We are passionate about ensuring a quality service experience and  helping our clients get the most enjoyment out of their special events.
            We help you create memorable experiences through our extensive services:
            </p>
                <ul>Consulting</ul>
                <ul>Planning</ul>
                <ul>Bartending Services</ul>
            <p>
            With over  15 years of professional bartending experience, coupled with knowledge of the most current service concepts and mixology trends,  we are  the perfect choice to help you make great memories.
            </p>
 
        <div className="content font-italic">Anyone can make a drink. We help you make great Memories!</div>
        </div>
        </div>
    )
}
}

export default AboutUs;