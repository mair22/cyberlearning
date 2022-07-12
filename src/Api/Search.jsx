import axios from "axios";
import { TOKEN_CYBERSOFT } from "../ulti/setting";

class Search {
    fetchSearch(tenKhoaHoc) {
        return axios({
          method: "GET",
          url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}`,
          headers: {
            ["TokenCybersoft"]: TOKEN_CYBERSOFT,
          },
        });
      }
}

export default Search