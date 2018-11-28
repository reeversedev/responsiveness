import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Media from "react-media";
import {
  faThLarge,
  faClipboard,
  faSave,
  faRupeeSign,
  faBell,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faThLarge,
  faClipboard,
  faSave,
  faRupeeSign,
  faBell,
  faUser,
  faShoppingCart
);
export const Sidebar = () => {
  return (
    <div className="sidebar d-flex justify-content-center">
      <ul className="nav flex-column sidebar_nav">
        <li>
          <div className="pt-4 pb-4">
            <FontAwesomeIcon icon={["fas", "th-large"]} />
          </div>
        </li>
        <li>
          <div className="pt-4 pb-4">
            <FontAwesomeIcon icon={["fas", "clipboard"]} />
          </div>
        </li>
        <li>
          <div className="pt-4 pb-4">
            <FontAwesomeIcon icon={["fas", "save"]} />
          </div>
        </li>
        <Media query={{ minWidth: 375 } && { maxWidth: 1023 }}>
          {matches =>
            matches && (
              <React.Fragment>
                <li>
                  <div className="pt-4 pb-4">
                    <FontAwesomeIcon icon={["fas", "rupee-sign"]} />
                  </div>
                </li>
                <li>
                  <div className="pt-4 pb-4">
                    <FontAwesomeIcon icon={["fas", "bell"]} />
                  </div>
                </li>
                <li>
                  <div className="pt-4 pb-4">
                    <FontAwesomeIcon icon={["fas", "user"]} />
                  </div>
                </li>
                <li>
                  <div className="pt-4 pb-4">
                    <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                  </div>
                </li>
              </React.Fragment>
            )
          }
        </Media>
      </ul>
    </div>
  );
};
