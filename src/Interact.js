import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import "./Interact.css";

class Interact extends Component {
render() {
    return(
        <div className="jumbotron jumbotron-fluid bg-white" id="jumbotron">
            <div className="container">          
            <img src='/bowtie_logo.jpg' className="img-thumbnail rounded float-left" alt=""/>
            <h1 className="display-4">Interact</h1>
            <p>
            Please contact us with any question you may have. 
            </p>
                <ul><i class="material-icons">phone</i>     816.301.5074</ul>
                <ul><i class="material-icons">email</i>      info@bowtiebartending.com</ul>
                <ul><SocialIcon url="https://www.facebook.com/bowtiebartending"/></ul>
                <ul><SocialIcon url="" network="instagram"/></ul>
         </div>
        </div>
    )
}
}

export default Interact;