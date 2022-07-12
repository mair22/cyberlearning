import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseDetail } from "../../redux/actions/Main";

class DetailPage extends Component {
  render() {
    return (
      <div>
        <img src={this.props.courseDetail.hinhAnh} alt="" />
        <h1>{this.props.courseDetail.tenKhoaHoc}</h1>
        <p>{this.props.courseDetail.moTa}</p>
        <p>{this.props.courseDetail.nguoiTao.hoTen}</p>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourseDetail(this.props.match.params.maKhoaHoc));
  }
}
const mapStateToProps = (state) => ({
  courseDetail: state.course.coursesDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    moTa: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});
export default connect(mapStateToProps)(DetailPage);
