import { Button } from "antd";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Item extends Component {
  render() {
    return (
        <div className='card p-2 listItem'>
          <img src={this.props.item.hinhAnh}/>
          <p className='lead font-weight-bold'>{this.props.item.tenKhoaHoc}</p>
          <p className='lead'>{this.props.item.nguoiTao.hoTen}</p>
          <NavLink to={`/chitietkhoahoc/${this.props.item.maKhoaHoc}`} className="custom-btn animation">Đăng ký</NavLink>
        </div>

    //   <div className="listItem">
    //     <div className="item col-12 col-sm-6 col-lg-3 card p-2">
    //       <div className="content">
    //         <div className="thumbnail">
    //           <img src={this.props.item.hinhAnh} />
    //         </div>
    //         <div>
    //           <h1>{this.props.item.tenKhoaHoc}</h1>
    //           <div className="readmore">
    //             <Button className="custom-btn animation">Đăng ký</Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    );
  }
}

export default Item;
