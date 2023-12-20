import { Style } from "./style";

import "./index.css";

export default function Login() {
  return (
    <Style>
      <div className="fh-wrapper">
        <div className="wrapper w-60 h-96 m-auto">
          <div className="wrapper-inner ">
            <h2 className="text-right mt-2">
              ورود از طریق از شماره تلفن همراه
            </h2>
            <h4 className="text-right mt-2">
              لطفا کشور خود را انتخاب کرده و شماره تلفن همراه خود را وارد کنید
            </h4>
            <div className="input-wrapper mt-2">
              <p className="text-right">شماره تلفن همراه</p>
              <div className="int_1 flex  align-center mt-3 ">
                +98 |
                <input className="intput ml-2" placeholder="9***********" />
              </div>
              <div className="int_2 flex justify-center mt-11">
                <input className="intput" placeholder="رمز عبور " />
              </div>
            </div>
            <div className="btn mt-2 justify-center flex">
              <button>ورود</button>
            </div>
            <h3 className="text-center mt-2">
              رمز عبور خود را فراموش کرده ام{" "}
            </h3>
            <h3 className="text-center mt-2">ورود از طریق ایمیل</h3>
          </div>
        </div>
      </div>
    </Style>
  );
}
