import React from 'react'
import { http } from '../../ulti/setting';
import { Button } from "antd";
import { NavLink } from "react-router-dom";

async function dangky(){
  let result = http.get('http://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=TuDuy&MaNhom=GP01')
  let study = [];
  try {
    let data = result.data;
    // console.log(data);
    for(let i = 0; i < i; i++){
      study.push(data[i]);
    }
  }
  catch(err){
    console.log(err);
  }

  for(let data of study){
    console.log(data);
  }

}


export default function DetailPage(props) {
  return (
    <div className="col-3">
            <div className="item">
              <div className="content">
                <i className="fab fa-autoprefixer" />
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <Button className="btn btn-warning" onClick={dangky}>Đăng ký</Button>
              </div>
            </div>
          </div>
  )
}
