import React, { useState } from "react";
import Button from "../uiElements/Button";
import { Style } from "./Style";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Additional logic for handling menu item clicks
  const handleMenuItemClick = () => {
    closeMenu();
  };

  return (
    <Style>
      <div className="full-container">
        <div className="header-inner flex space-between">
          <div className="left flex gap-40 align-center">
            <div className="menu">
              <ul className="flex align-center gap-5">
                <li>
                  <Button
                    border="solid"
                    to="/login"
                    size="large"
                    icon="fa-solid fa-tv"
                  >
                    ورود و ثبت نام
                  </Button>
                </li>
                <li>
                  <Button to= "/licens" size="large" icon="fa-solid fa-tv">
                    خرید اشتراک
                  </Button>
                </li>
                <li>
                  <Button to="/search" size="large" icon="fa-solid fa-plus">
                    جستجو
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="right flex gap-10 align-center">
            <Button className="bold">کودکان</Button>
            <Button className="bold">پردیس نماوا</Button>
            <Button className="bold">نماوا مگ</Button>
            <Button to="/" icon="fa-solid fa-search">
              خانه
            </Button>
            <Link to={"/"}>
              <div className="logo">
                <img className="logo" src="assets/logo/logo.svg" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="responsive_container ">
        <div className="responsiv_inner  flex space-between">
          <div className="right">
            <ul className="flex">
              <li>
                <Button
                  border="solid"
                  to="/login"
                  size="large"
                  icon="fa-solid fa-tv"
                >
                  ورود و ثبت نام
                </Button>
              </li>
              <li className="none">
                <Button size="large" icon="fa-solid fa-tv">
                  خرید اشتراک
                </Button>
              </li>
            </ul>
          </div>
          <div className="left flex align-center">
            <ul>
              <li>
                <Button to="/search" size="large" icon="fa-solid fa-plus">
                  جستجو
                </Button>
              </li>
            </ul>
            <Link to={"/"} >
            <div className="logo">
              <img className="wh" src="assets/logo/logo.svg" />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </Style>
  );
}
