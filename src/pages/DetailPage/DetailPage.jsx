import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseDetail } from "../../redux/actions/Main";

class DetailPage extends Component {
  render() {
    return (
      <div>
        <img src={this.props.courseDetail.hinhAnh} alt="courseDetail" />
        <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourseDetail(this.props.match.params.maKhoaHoc));
  }
}
const mapStateToProps = (state) => ({
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});
export default connect(mapStateToProps)(DetailPage);
