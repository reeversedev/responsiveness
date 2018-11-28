import React from "react";
import Media from "react-media";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faRupeeSign,
  faBell,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faTimes, faRupeeSign, faBell, faUser, faShoppingCart);

export const Header = ({ ...props }) => {
  return (
    <div className="header">
      <nav className="navbar">
        <Media query={{ minWidth: 1024 }}>
          {matches =>
            !matches && (
              <div className="sidebar-menu" onClick={props.toggleSidebar}>
                {props.isOpenSidebar ? (
                  <FontAwesomeIcon
                    icon={["fas", "times"]}
                    className="icon-wh"
                  />
                ) : (
                  <FontAwesomeIcon icon={["fas", "bars"]} className="icon-wh" />
                )}
              </div>
            )
          }
        </Media>
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img
                src="http://www.whitepanda.in/img/full_logo_white.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="d-flex align-items-center justify-content-around"
            id="sideIcons"
          >
            <div className="outer-circle">
              <a href="/">
                <FontAwesomeIcon
                  icon={["fas", "rupee-sign"]}
                  className="icon-wh header-icon"
                />
              </a>
            </div>
            <div className="outer-circle">
              <a href="/">
                <FontAwesomeIcon
                  icon={["fas", "bell"]}
                  className="icon-wh header-icon"
                />
              </a>
            </div>
            <div className="outer-circle">
              <a href="/">
                <FontAwesomeIcon
                  icon={["fas", "user"]}
                  className="icon-wh header-icon"
                />
              </a>
            </div>
            <div className="shopping-circle">
              <a href="/">
                <FontAwesomeIcon
                  icon={["fas", "shopping-cart"]}
                  className="icon-wh header-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
