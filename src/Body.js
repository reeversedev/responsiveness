import React, { Component } from "react";
import Cards from "./Cards";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards
              title="Blog Post"
              subtitle="400-500 Words"
              icon="newspaper"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards title="White Paper" subtitle="2500-3000 Words" icon="file" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards
              title="Website Content"
              subtitle="250-350 Words"
              icon="laptop"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards
              title="Press Release"
              subtitle="350-450 Words"
              icon="print"
            />
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards
              title="Product Description"
              subtitle="150-200 Words"
              icon="file-alt"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards title="Social Media" subtitle="30-35 Words" icon="tablet" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards
              title="Book/Story Writing"
              subtitle="500-1000 Words"
              icon="book"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards
              title="Video Scripting"
              subtitle="1000-4000 Words"
              icon="film"
            />
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards title="Newsletter" subtitle="400-500 Words" icon="copy" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards
              title="Brochure Content"
              subtitle="850-1000 Words"
              icon="edit"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards
              title="Custom Content"
              subtitle="850-1000 Words"
              icon="wrench"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Cards title="Contest" subtitle="10-20 Words" icon="trophy" />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <Cards
              title="Order from Tempalte"
              subtitle="You can give an order from templates"
              icon="bookmark"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Cards
              title="Order via Spreadsheets"
              subtitle="It's useful when giving bulk orders"
              icon="file-excel"
            />
          </div>
        </div>
      </div>
    );
  }
}
