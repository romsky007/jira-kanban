/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Iframe from 'react-iframe';
import {getData} from "./FetchUtils";


class JiraView extends React.Component {
  fetchFromLink = dataURL => {
    let result = getData(dataURL);
    console.log(result);
    ReactDOM.render(result, document.querySelector("#jira-content"));
  }

  render() {
    return ( 
      <div className = "jira-view" >
        <div id="jira-content">
        <Iframe url="http://www.ibm.com" className="jira-content-frame" position="inherit"/>
        </div>
      </div>   
    )
  }
}

/*<iframe className = "jira-content-frame"/>*/
export default JiraView;