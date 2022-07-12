import React, { Component } from "react";
import { connect } from "react-redux";
import Carosel from "./Carosel";
import { fetchCourseBase } from "../../redux/actions/Main";
import Item from "../../components/Item/Item";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Carosel />
        <h1 className="display-4 text-center">Danh sách khóa học</h1>
        <div className="container">
          <div className="row">
            {this.props.courseListBase.map((item, index) => (
                <Item item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCourseBase());
  }
}

const mapStateToProps = (state) => ({
  courseListBase: state.course.courses,
});

export default connect(mapStateToProps)(HomePage);
