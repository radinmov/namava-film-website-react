import { Link } from "react-router-dom";
import { Style } from "./style";

export default function Header_2_licens() {
  return (
    <Style>
      <div className="container-2 ">
        <div className="header_2_inner flex space-between align-center ">
          <div className="left">
            <Link to={"/login"}>ورود و ثبت نام</Link>
          </div>
          <div className="right flex gap-10 align-center ">
            <p>کد تخفیف / هدیه </p>
            <Link to={"/"} >
            <div className="logo">
              <img className="logo" src="assets/logo/logo.svg" />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </Style>
  );
}
