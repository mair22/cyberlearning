import axios from "axios";
import { TOKEN_CYBERSOFT } from "../ulti/setting";

class Course {
  fetchCourse() {
    return axios({
      method: "GET",
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
      headers: {
        ["TokenCybersoft"]: TOKEN_CYBERSOFT,
      },
    });
  }
  fetchCourseDetail(id) {
    return axios({
      method: "GET",
      url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
      headers: {
        ["TokenCybersoft"]: TOKEN_CYBERSOFT,
      },
    });
  }
}
export default Course;
