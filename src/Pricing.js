import React, { Component } from "react";
import './Pricing.css';

class Pricing extends Component {
    render() {
        return(
        <div className="jumbotron jumbotron-fluid bg-white" id="jumbotron">
            <div className="container">
            <div class="row justify-content-md-center">
                <h1 className="display-4">Pricing</h1>
                <p className="lead">Bow Tie Bartending's mission is to provide clients with excellent service at all events.  Each bar catering package with exception of Bartending Only Service,  comes standard with the following essentials necessary to serve you:</p>
                    <ul id="list-items">
                    <ul>Bartending Utensils</ul>
                    <ul>Ice Containers</ul>
                    <ul>Mixers</ul>
                    <ul>Garnishes</ul>
                    <ul>Napkins</ul>
                    <ul>Straws</ul>
                    <p></p>
                    <p className="font-italic">These items are included with each package.</p>
                    </ul>
                    </div>
                    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Package</th>
      <th scope="col">Price</th>
      <th scope="col">Minimum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Penny Saved</th>
      <td>$15/person</td>
      <td>20 Person minimum</td>
    </tr>
    <tr>
      <th scope="row">Black Tie</th>
      <td>$25/person</td>
      <td>20 person minimum</td>
    </tr>
    <tr>
      <th scope="row">Classy but Trashy</th>
      <td colspan="2">Starting at $475</td>
    </tr>
    <tr>
      <th scope="row">Arts and Craft</th>
      <td colspan="2">Starting at $475</td>
    </tr>
    <tr>
      <th scope="row">To Your Health</th>
      <td colspan="2">Starting at $475</td>
    </tr>
    <tr>
      <th scope="row">Private Collection</th>
      <td colspan="2"> Request a Quote</td>
    </tr>
    <tr>
      <th scope="row">Custom Event</th>
      <td colspan="2">Request a Quote</td>
    </tr>
    <tr>
      <th scope="row">Bartending Only Service</th>
      <td>$35/hr</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
        )
    }
    }
    
    export default Pricing;