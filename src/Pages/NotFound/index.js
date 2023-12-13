import { Link } from "react-router-dom";
import PrimaryLayout from "../../Layout/PrimaryLayout";
import { Style } from "./style";
import './index.css'

export default function NotFound() {
  return (
    <Style>
      <PrimaryLayout>
        <div className="container">
          <h1 className="Not">404 page</h1>
          <h1 className="Not">Sorry We couldent find Your Searched page</h1>
          <Link className="Linked" to="/">
            go To Home
          </Link>
          <p className="underline">test</p>
        </div>
      </PrimaryLayout>
    </Style>
  );
}
