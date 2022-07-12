import React, { Component } from "react";
import ListPageItem from "../../components/Item/Item";
import { connect } from "react-redux";
import { fetchCourse } from "../../redux/actions/Main";
import ListLine from "./ListLine";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <ListLine/>
        <h1 className="display-4 text-center">Danh sách khóa học</h1>
        <div className="container">
          <div className="row">
            {this.props.courseList.map((item, index) => (
              <div className="col-3">
                <ListPageItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCourse())
  }
}

const mapStateToProps = (state) => ({
  courseList: state.course.courses,
});

export default connect(mapStateToProps)(HomeScreen);