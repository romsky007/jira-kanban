/*jshint esversion: 6 */
import React from "react";

class StickyNode extends React.Component {
  onLinkClick = () => {
    console.log("onLinkClick on " + this.props.link);
    this.props.updateJiraUrl(this.props.link);
  };

  render() {
    return (
      <li className="sticky-note-li">
        <a className="sticky-note-a" onClick={this.onLinkClick}>
          <h3 className="sticky-note-title">{this.props.title}</h3>
          <hr />
          <p className="sticky-note-content">{this.props.content}</p>
        </a>
    </li>
    )
  }
}

export default StickyNode;
