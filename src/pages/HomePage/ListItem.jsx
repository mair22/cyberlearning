// import React from "react";
// import { http } from '../../ulti/setting';
// import { Button } from "antd";

// async function dangky1(){
//   let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
//   let firstEight = [];
//   try {
//     let data = result.data;
//     // console.log(data);
//     for(let i = 0; i < 1; i++){
//       firstEight.push(data[i]);
//     }
//   }
//   catch(err){
//     console.log(err);
//   }

//   for(let data of firstEight){
//     console.log(data);
//   }
// }

// async function dangky2(){
//   let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
//   let firstEight = [];
//   try {
//     let data = result.data;
//     // console.log(data);
//     for(let i = 1; i < 2; i++){
//       firstEight.push(data[i]);
//     }
//   }
//   catch(err){
//     console.log(err);
//   }

//   for(let data of firstEight){
//     console.log(data);
//   }

// }

// async function dangky3(){
//   let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
//   let firstEight = [];
//   try {
//     let data = result.data;
//     // console.log(data);
//     for(let i = 2; i < 3; i++){
//       firstEight.push(data[i]);
//     }
//   }
//   catch(err){
//     console.log(err);
//   }

//   for(let data of firstEight){
//     console.log(data);
//   }

// }

// async function dangky4(){
//   let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
//   let firstEight = [];
//   try {
//     let data = result.data;
//     // console.log(data);
//     for(let i = 3; i < 4; i++){
//       firstEight.push(data[i]);
//     }
//   }
//   catch(err){
//     console.log(err);
//   }

//   for(let data of firstEight){
//     console.log(data);
//   }

// }

// async function dangky5(){
//   let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
//   let firstEight = [];
//   try {
//     let data = result.data;
//     // console.log(data);
//     for(let i = 4; i < 5; i++){
//       firstEight.push(data[i]);
//     }
//   }
//   catch(err){
//     console.log(err);
//   }

//   for(let data of firstEight){
//     console.log(data);
//   }

// }

// async function dangky6(){
//   let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
//   let firstEight = [];
//   try {
//     let data = result.data;
//     // console.log(data);
//     for(let i = 5; i < 6; i++){
//       firstEight.push(data[i]);
//     }
//   }
//   catch(err){
//     console.log(err);
//   }

//   for(let data of firstEight){
//     console.log(data);
//   }

// }

// async function dangky7(){
//   let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
//   let firstEight = [];
//   try {
//     let data = result.data;
//     // console.log(data);
//     for(let i = 6; i < 7; i++){
//       firstEight.push(data[i]);
//     }
//   }
//   catch(err){
//     console.log(err);
//   }

//   for(let data of firstEight){
//     console.log(data);
//   }

// }

// async function dangky8(){
//   let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
//   let firstEight = [];
//   try {
//     let data = result.data;
//     // console.log(data);
//     for(let i = 7; i < 8; i++){
//       firstEight.push(data[i]);
//     }
//   }
//   catch(err){
//     console.log(err);
//   }

//   for(let data of firstEight){
//     console.log(data);
//   }

// }
// export default function ListItem(props) {
//   return (
//     <section className="listItem">
//       <div className="container">
//         <h1>C??c kh??a h???c m???i nh???t</h1>
//         <div className="list row">

//           {/* <div className="item col-12 col-sm-6 col-lg-3">
//             <div className="content">
//               <div className="thumbnail">
//               </div>
//               <div>
//                 <h1>Th??nh th???o Bootstrap qua 10 website</h1>
//                 <div className="readmore">
//                 <Button className="custom-btn animation" onClick={dangky1}>????ng k??</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="item col-12 col-sm-6 col-lg-3">
//             <div className="content">
//               <div className="thumbnail">
//               </div>
//               <div>
//                 <h1>Th??nh th???o Bootstrap qua 10 website</h1>
//                 <div className="readmore">
//                 <Button className="custom-btn animation" onClick={dangky2}>????ng k??</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="item col-12 col-sm-6 col-lg-3">
//             <div className="content">
//               <div className="thumbnail">
//               </div>
//               <div>
//                 <h1>Th??nh th???o Bootstrap qua 10 website</h1>
//                 <div className="readmore">
//                 <Button className="custom-btn animation" onClick={dangky3}>????ng k??</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="item col-12 col-sm-6 col-lg-3">
//             <div className="content">
//               <div className="thumbnail">
//                 <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
//               </div>
//               <div>
//                 <h1>Th??nh th???o Bootstrap qua 10 website</h1>
//                 <div className="readmore">
//                 <Button className="custom-btn animation" onClick={dangky4}>????ng k??</Button>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//         </div>

//         <div className="list row">
//           <div className="item col-12 col-sm-6 col-lg-3">
//             <div className="content">
//               <div className="thumbnail">
//                 <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
//               </div>
//               <div>
//                 <h1>Th??nh th???o Bootstrap qua 10 website</h1>
//                 <div className="readmore">
//                 <Button className="custom-btn animation" onClick={dangky5}>????ng k??</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="item col-12 col-sm-6 col-lg-3">
//             <div className="content">
//               <div className="thumbnail">
//                 <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
//               </div>
//               <div>
//                 <h1>Th??nh th???o Bootstrap qua 10 website</h1>
//                 <div className="readmore">
//                 <Button className="custom-btn animation" onClick={dangky6}>????ng k??</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="item col-12 col-sm-6 col-lg-3">
//             <div className="content">
//               <div className="thumbnail">
//                 <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
//               </div>
//               <div>
//                 <h1>Th??nh th???o Bootstrap qua 10 website</h1>
//                 <div className="readmore">
//                 <Button className="custom-btn animation" onClick={dangky7}>????ng k??</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="item col-12 col-sm-6 col-lg-3">
//             <div className="content">
//               <div className="thumbnail">
//                 <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
//               </div>
//               <div>
//                 <h1>Th??nh th???o Bootstrap qua 10 website</h1>
//                 <div className="readmore">
//                 <Button className="custom-btn animation" onClick={dangky8}>????ng k??</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
