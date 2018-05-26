/*jshint esversion: 6 */
import React from "react";
import StickyNodeFolder from './StickyNodeFolder';
import JiraView from './JiraView';

class AppKanban extends React.Component {

  state = {
    jiraUrl: null
  };

  updateJiraUrl = jiraUrl => {
    console.log("updateJiraUrl on " + jiraUrl);
    this.setState({jiraUrl});
   }

  render() {
    return (
      <div className="app-view">
        <div className="bar-kanban">
          <StickyNodeFolder headline="BackLog" updateJiraUrl={this.updateJiraUrl} />
          <StickyNodeFolder headline="Ready" updateJiraUrl={this.updateJiraUrl} />
          <StickyNodeFolder headline="Today" updateJiraUrl={this.updateJiraUrl} />
          <StickyNodeFolder headline="InProgress" updateJiraUrl={this.updateJiraUrl} />
          <StickyNodeFolder headline="Done" updateJiraUrl={this.updateJiraUrl} />
        </div>
        <JiraView jiraUrl={this.state.jiraUrl}/>
        </div>
    );
  }
}
export default AppKanban;
