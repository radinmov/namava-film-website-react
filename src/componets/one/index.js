import Header from "../Header";
import { Style } from "./style";
import { Link } from "react-router-dom";
export default function One() {
  return (
    <Style>
        <Header />
      <div className="container relative hello">
        <div className="container_inner absolute">
          <img src="https://static.namava.ir/Content/Upload/Images/99c96807-a4fe-4db8-abc5-bb19ff2d5f4a.png" />
          <p className="title">داوین چیز </p>
          <div className="conditions flex gap-20 align-center">
            <p>Namava</p>
            <p>1402</p>
            <div className="age text-center">۱۲+</div>
          </div>
          <div className="btn text-center">
            <Link to={"/login"}>ورود و پخش </Link>
          </div>
        </div>
      </div>
    </Style>
  );
}
