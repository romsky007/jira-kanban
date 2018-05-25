/*jshint esversion: 6 */
import React from "react";

class StickyNode extends React.Component {
  getdata = async () => {
    console.log("link is: " + this.props.link);
    console.log(this.props);
    this.props.fetchFromLink(this.props.link);
  };

  render() {
    return (
      <li className="sticky-note-li">
        <a className="sticky-note-a" target="jira" 
          href={this.props.link}>
        
          <h3 className="sticky-note-title">{this.props.title}</h3>
          <hr />
          <p className="sticky-note-content">{this.props.content}</p>
        </a>
    </li>
    )
  }
}

export default StickyNode;
