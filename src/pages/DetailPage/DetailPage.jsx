import React from 'react'
import { http } from '../../ulti/setting';
import { Button } from "antd";
import { NavLink } from "react-router-dom";

async function dangky1(){
  let result = await http.get('http://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
  let firstEight = [];
  try {
    let data = result.data;
    // console.log(data);
    for(let i = 0; i < 1; i++){
      firstEight.push(data[i]);
    }
  }
  catch(err){
    console.log(err);
  }

  for(let data of firstEight){
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
                <Button className="btn btn-warning" onClick={dangky1}>Đăng ký</Button>
              </div>
            </div>
          </div>
  )
}
