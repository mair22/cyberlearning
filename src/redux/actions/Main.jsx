import { CourseAPI } from "../../Api/Main";
import { createAction } from "./Course";
import { FETCH_COURSES, FETCH_COURSES_DETAILS } from "./Type";

export const fetchCourseBase = () => {
    return (dispatch) => {
        CourseAPI.fetchCourse()
      .then((res) => {
        let firstEight = [];
        let data = res.data;
        for (let i = 0; i < 8; i++) {
          firstEight.push(data[i])
        }
        dispatch(createAction(FETCH_COURSES, firstEight));
      })
      .catch((err) => {
        console.log(err);
      });
    }
}

export const fetchCourse = () => {
  return (dispatch) => {
      CourseAPI.fetchCourse()
    .then((res) => {
      dispatch(createAction(FETCH_COURSES, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

export const fetchCourseDetail = (id) => {
    return (dispatch) => {
        CourseAPI.fetchCourseDetail(id)
      .then((res) => {
        console.log(res);
        dispatch(createAction(FETCH_COURSES_DETAILS, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}