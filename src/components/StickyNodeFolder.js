/*jshint esversion: 6 */
import React from "react";
import StickyNode from "./StickyNote";

class StickyNodeFolder extends React.Component {
  render() {
    return (
      <div className="sticky-folder">
        <h3 className="tagline headline">
          <span>{this.props.headline}</span>
        </h3>
        <ul>
            <StickyNode 
              fetchFromLink={this.props.fetchFromLink} 
              link="http://google.com"  
              title="Issue 7384" 
              content="Text Content #1" />
              
            <StickyNode fetchFromLink={this.props.fetchFromLink} link="http://ibm.com"  title="Issue 7385" content="Text Content #2" />
            <StickyNode fetchFromLink={this.props.fetchFromLink} link="http://oracle.com"  title="Issue 7386" content="Text Content #3" />
            <StickyNode fetchFromLink={this.props.fetchFromLink} link="http://redhat.com"  title="Issue 7387" content="Text Content #4" />
        </ul> 
      </div>   
    )
  }
}

export default StickyNodeFolder;
