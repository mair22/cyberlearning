import axios from "axios";
import { TOKEN_CYBERSOFT } from "../ulti/setting";

class Info {
  fetchInfo() {
    return axios({
      method: "POST",
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      headers: {
        ["Authorization"]:
          "Bearer " + JSON.parse(localStorage.getItem("data")).accessToken,
        ["TokenCybersoft"]: TOKEN_CYBERSOFT,
      },
    });
  }
}
export default Info;
