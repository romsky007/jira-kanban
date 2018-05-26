/*jshint esversion: 6 */
import React from "react";
import Iframe from 'react-iframe';


class JiraView extends React.Component {
  render() {
    return ( 
      <div className = "jira-view" >
        <div id="jira-content">
        {this.props.jiraUrl 
          ?  <Iframe url={this.props.jiraUrl} className="jira-content-frame" position="inherit" ref={this.iframeRef}/>
          :  <span>No JIRA Ticket selected</span>
        }
        </div>
      </div>   
    )
  }
}

export default JiraView;