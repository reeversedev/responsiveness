import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import Body from "./Body";
import "./App.css";

export default class App extends Component {

  state = {
    isOpenSidebar: false
  };

  toggleSidebar = () => {
    this.setState(prevstate => { 
      return {isOpenSidebar: !prevstate.isOpenSidebar} 
    });
  }

  render() {
    return (
      <div>
        <Header {...this.props} isOpenSidebar={this.state.isOpenSidebar} toggleSidebar={this.toggleSidebar} />
        <div className="main-area">
          {
            this.state.isOpenSidebar &&
            <Fragment>
              <Sidebar {...this.props} isOpenSidebar={this.state.isOpenSidebar} toggleSidebar={this.toggleSidebar} />
              <div className = {this.state.isOpenSidebar && 'modal-backdrop fade' } onClick = {this.toggleSidebar}></div>
            </Fragment>
          }
          <div className={this.state.isOpenSidebar ? 'content' : 'full-content'}>
            <Body {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
