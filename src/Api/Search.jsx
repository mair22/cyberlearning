import axios from "axios";
import { TOKEN_CYBERSOFT } from "../ulti/setting";

class Search {
    fetchCourseDetail(id) {
        return axios({
          method: "GET",
          url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${id}`,
          headers: {
            ["TokenCybersoft"]: TOKEN_CYBERSOFT,
          },
        });
      }
}

export default Search