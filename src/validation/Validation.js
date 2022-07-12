export function Validation () {
  this.kiemTraRong = function (value,selectorError) {
    if(value.trim() ==='') {
      document.querySelector(selectorError).innerHTML = 'Không được bỏ trống!';
      return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
  }

  this.kiemTraKiTu = function (value,selectorError) {
    let regexLetter = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    if(regexLetter.test(value)) {
      document.querySelector(selectorError).innerHTML = '';
      return true;
    }
    document.querySelector(selectorError).innerHTML = 'Kí tự không hợp lệ!';
    return false;
  }
  
  this.kiemTraNhapLai = function (value,retypeValue,selectorError) {
    if(retypeValue != value){
      document.querySelector(selectorError).innerHTML = 'Mật khẩu không khớp!'
      return false;
    }
    else {
      document.querySelector(selectorError).innerHTML = ''
      return true;
    }
  }

  this.kiemTraEmail = function (value,selectorError) {
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;    ;
    if(regexEmail.test(value)) {
      document.querySelector(selectorError).innerHTML = '';
      return true;
    }
    document.querySelector(selectorError).innerHTML = 'Email không hợp lệ!';
    return false;
  }
}


