import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faFile,
  faLaptop,
  faPrint,
  faFileAlt,
  faTablet,
  faBook,
  faFilm,
  faCopy,
  faEdit,
  faWrench,
  faTrophy,
  faBookmark,
  faFileExcel
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

library.add(
  faNewspaper,
  faFile,
  faLaptop,
  faPrint,
  faFileAlt,
  faTablet,
  faBook,
  faFilm,
  faCopy,
  faEdit,
  faWrench,
  faTrophy,
  faBookmark,
  faFileExcel
);
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Card className=" mb-4">
          <div className="d-flex justify-content-center pt-3">
            <div className="circle">
              <FontAwesomeIcon icon={["fas", this.props.icon]} />
            </div>
          </div>
          <CardBody>
            <CardTitle className="text-center">{this.props.title}</CardTitle>
            <CardSubtitle className="text-center text-muted">
              {this.props.subtitle}
            </CardSubtitle>
            <div className="d-flex justify-content-center mt-3">
              <Button color="success">Order</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
