import React, { Component } from "react";
import Media from "react-media";
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
          <Media query={{ minWidth: 1024 }}>
            {matches =>
              (matches || this.state.isOpenSidebar) && (
                <Sidebar {...this.props} isOpenSidebar={this.state.isOpenSidebar} toggleSidebar={this.toggleSidebar} />
              )
            }
          </Media>
          {
            this.state.isOpenSidebar && 
            <div className = {this.state.isOpenSidebar && 'modal-backdrop fade' } onClick = {this.toggleSidebar}></div>
          }
          <div className='content'>
            <Body {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
