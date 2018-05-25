/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import { getData } from "./FetchUtils";
import StickyNodeFolder from './StickyNodeFolder';
import JiraView from './JiraView';

class AppKanban extends React.Component {

  static jiraContentId = "jira-content";
  state = {
    fishes: {},
    order: {}
  };

  fetchFromLink = dataURL => {
      let result = getData(dataURL);

      console.log("get data: " + result);
      ReactDOM.render(result, document.querySelector("#" + this.jiraContentId));
   }

  render() {
    return (
      <div className="app-view">
        <div className="bar-kanban">
          <StickyNodeFolder headline="BackLog" fetchFromLink={this.fetchFromLink} />
          <StickyNodeFolder headline="Ready" fetchFromLink={this.fetchFromLink} />
          <StickyNodeFolder headline="Today" fetchFromLink={this.fetchFromLink} />
          <StickyNodeFolder headline="InProgress" fetchFromLink={this.fetchFromLink} />
          <StickyNodeFolder headline="Done" fetchFromLink={this.fetchFromLink} />
        </div>
        <JiraView contentId={this.jiraContentId} />
        </div>
    );
  }
}
export default AppKanban;
