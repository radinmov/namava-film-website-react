import { Fragment } from "react";
import { HeadersDefaults } from "axios";
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";

export default function PrimaryLayout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
}
