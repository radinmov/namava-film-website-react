import { Style } from "./style";

import "./index.css";

export default function Login() {
  return (
    <Style>
      <div className="fh-wrapper">
        <div className="wrapper w-60 h-96 m-auto">
          <div className="wrapper-inner">
            <h2>ورود از طریق از شماره تلفن همراه</h2>
            <h4>
              لطفا کشور خود را انتخاب کرده و شماره تلفن همراه خود را وارد کنید .
            </h4>
            <div className="input-wrapper">
              <p>شماره تلفن همراه</p>
              <div className="int_1">
                +98 |
                <input className="intput" placeholder="9***********" />
              </div>
              <input className="intput" placeholder="رمز عبور " />
            </div>
            <button>ورود</button>
            <h3>رمز عبور خود را فراموش کرده ام </h3>
            <h3>ورود از طریق ایمیل</h3>
          </div>
        </div>
      </div>
    </Style>
  );
}
