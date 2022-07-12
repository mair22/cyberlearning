import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Item extends Component {
  render() {
    return (
        <div className="item col-12 col-sm-6 col-lg-3">
          <div className="content">
            <div className="thumbnail">
              <img src={this.props.item.hinhAnh} alt=""/>
            </div>
            <div>
              <h1>{this.props.item.tenKhoaHoc}</h1>
              <div className="readmore">
              <NavLink to={`/chitietkhoahoc/${this.props.item.maKhoaHoc}`} className="custom-btn animation">Chi tiết</NavLink>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Item;
