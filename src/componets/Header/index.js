import Button from "../uiElements/Button";
import { Style } from "./Style";
import "./index.css"

export default function Header() {
  return (
    <Style>
      <div className="full-container">
        <div className="header-inner flex space-between">
          <div className="left flex gap-40 align-center">
            <div className="menu">
              <ul className="flex align-center gap-5">
                <li>
                  <Button size="large" icon="fa-solid fa-tv">
                    ورود و ثبت نام
                  </Button>
                </li>
                <li>
                  <Button size="large" icon="fa-solid fa-tv">
                    خرید اشتراک
                  </Button>
                </li>
                <li>
                  <Button size="large" icon="fa-solid fa-plus">
                    جستجو
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="right flex gap-10 align-center">
            <Button className="bold" >
              کودکان
            </Button>
            <Button className="bold">
              پردیس نماوا
            </Button>
            <Button className="bold">
              نماوا مگ
            </Button>
            <Button icon="fa-solid fa-search">خانه</Button>
            <div className="logo">
              <img src="assets/logo/logo.svg" />
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
