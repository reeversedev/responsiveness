import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faClipboard,
  faSave
} from "@fortawesome/free-solid-svg-icons";

library.add(faThLarge, faClipboard, faSave);
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
      </ul>
    </div>
  );
};
