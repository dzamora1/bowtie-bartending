import React, { Component } from "react";
import './Packages.css';

class Packages extends Component {
render() {
    return(
        // *****  This section controls the content that displays at the top of the Packages page.
        //  To update the list of packages that display on the left of the screen, update the list under section "list-group"
        //  To update the detailed content that is displayed on the right side of the list, update the "tab-content" section below
        //  You can easily identify which package is being reference by looking at the id assigned on each line. ie "list-pennySaved-list" this will correspond to the tab-content id "list-pennySaved"
        <div className="jumbotron jumbotron-fluid bg-white">
           <div className="container">
           <h1 className="display-4">Packages</h1>
                <p className="lead">Bow Tie Bartending  offers a wide selection of options for your event needs; including full bartending services, a la carte options, staffing only and custom menu creations.</p>
            {/* This is the list-group section mentioned above */}
            <div className="row">
                <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-pennySaved-list" data-toggle="list" href="#list-pennySaved" role="tab" aria-controls="pennySaved">Penny Saved</a>
                    <a className="list-group-item list-group-item-action" id="list-blackTie-list" data-toggle="list" href="#list-blackTie" role="tab" aria-controls="blackTie">Black Tie Package</a>
                    <a className="list-group-item list-group-item-action" id="list-classyTrashy-list" data-toggle="list" href="#list-classyTrashy" role="tab" aria-controls="classyTrashy">Classy But Trashy</a>
                    <a className="list-group-item list-group-item-action" id="list-artsCrafts-list" data-toggle="list" href="#list-artsCrafts" role="tab" aria-controls="artsCrafts">Arts and Craft</a>
                    <a className="list-group-item list-group-item-action" id="list-tYHealth-list" data-toggle="list" href="#list-tYHealth" role="tab" aria-controls="tYHealth">To Your Health</a>
                    <a className="list-group-item list-group-item-action" id="list-privateCollection-list" data-toggle="list" href="#list-privateCollection" role="tab" aria-controls="privateCollection">Private Collection</a>
                    <a className="list-group-item list-group-item-action" id="list-customPackages-list" data-toggle="list" href="#list-customPackages" role="tab" aria-controls="customPackages">Custom Package Options</a>
                    <a className="list-group-item list-group-item-action" id="list-bartendingOnly-list" data-toggle="list" href="#list-bartendingOnly" role="tab" aria-controls="bartendingOnly">Bartending Only Services</a>
                    </div>
                </div>
                {/* This is the tab-content section listed about */}
                <div className="col-8 bg-light">
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active text-dark " id="list-pennySaved" role="tabpanel" aria-labelledby="list-pennySaved-list">Well brand liquors and budget conscious beers and wine done with exceptional service.  Package includes:
                        <p className="text-left">
                        <p></p>
                        <li>Variety of well liquors</li>
                        <li>Mixers, soft drinks, bottled water</li>
                        <li>Domestic beer</li>
                        <li>Red &amp; white wine</li>
                        <li>1 hour set up time and up to 4 hours  bar service</li>
                        </p>
                    </div>
                    <div className="tab-pane fade" id="list-blackTie" role="tabpanel" aria-labelledby="list-blackTie-list">Tried and true or products brand new, but all considered top of the line.  The Black Tie Package includes:
                        <p></p>
                        <p className="text-left">
                        <li>Variety of premium liquor</li>
                        <li>Mixers, soft drinks, bottled water</li>
                        <li>Premium &amp; Domestic beer</li>
                        <li>Red &amp; white wine</li>
                        <li>1 hour set up time and up to 4 hours  bar service</li>
                        </p>
                    </div>
                    <div className="tab-pane fade" id="list-classyTrashy" role="tabpanel" aria-labelledby="list-classyTrashy-list">Super strong specialty drinks, fun shots and chasers guaranteed to create a maybe not so memorable night.  This package includes:
                        <p></p>
                        <p className="text-left">
                        <li>Specialty cocktail custom to event</li>
                        <li>Specialty shot &amp; shot custom to the event</li>
                        <li>Choice of 2 well liquors</li>
                        <li>Mixers, Soft Drink &amp; bottled water</li>
                        <li>Option of additional wells, domestic beer and wine selection</li>
                        <li>2 hour minimum service</li>
                        </p>
                    </div>
                    <div className="tab-pane fade" id="list-artsCrafts" role="tabpanel" aria-labelledby="list-artsCrafts-list">For a fabulous event focused on classic cocktails, new pours and artisan brews.  This package includes:
                        <p></p>
                        <p className="text-left">
                        <li>Up to 3 specialty cocktails custom to event</li>
                        <li>Up to 3 styles of artisan beer</li>
                        <li>Soft Drink &amp; bottled water</li>
                        <li>Option of additional wells, domestic beer and wine selection</li>
                        <li>1 hour set up time and up to 4 hours  bar service</li>
                        </p>
                    </div>
                    <div className="tab-pane fade" id="list-tYHealth" role="tabpanel" aria-labelledby="list-tYHealth-list">Handcrafted cocktails with fresh, health conscious elements and organic liquors.  Package includes: 
                        <p></p>
                        <p className="text-left">
                        <li>2 specialty drinks made with organic liquor</li>
                        <li>Wine (Organic/Sulfate Free)</li>
                        <li>Beer (Organic)</li>
                        <li>Non-alcohol based drinks &amp; bottled water</li>
                        <li>1 hour set up time and up to 4 hours  bar service</li>
                        </p>
                    </div>
                    <div className="tab-pane fade" id="list-privateCollection" role="tabpanel" aria-labelledby="list-privateCollection-list">Please contact a member of our team for details.
                        <p></p>
                        <p className="text-left">
                        <li>1 hour set up time and up to 4 hours  bar service</li>
                        </p>
                    </div>
                    <div className="tab-pane fade" id="list-customPackages" role="tabpanel" aria-labelledby="list-customPackages-list">Have other ideas or needs? Bow Tie Bartending can do that too!  Options include:
                        <p></p>
                        <p className="text-left">
                        <li>Completely custom experience based on client consultation</li>
                        <li>Mocktail packages for childs, teen or adult events</li>
                        <li>Beer &amp; Wine only packages</li>
                        <li>Guided tastings</li>
                        </p>
                    </div>
                    <div className="tab-pane fade" id="list-bartendingOnly" role="tabpanel" aria-labelledby="list-bartendingOnly-list">You buy and  we mix, stir, uncork and pour.  Bartending only servicer includes:
                        <p></p> 
                        <p className="text-left">
                        <li>Professional bartending staff sourced at the number required to make your event a success</li>
                        <li>Bartenders can help with setup, service and bar area clean up</li>
                        <li>3 hour minimum required (time includes setup</li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="content"></div>
        </div>
    </div>
    )
}
}

export default Packages;