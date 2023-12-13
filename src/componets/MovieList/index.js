import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { Link } from "react-router-dom";
import { Style } from "./style";
import "./index.css"
// import { GoArrowLeft } from "react-icons/go"
// import Loading from "../Loading";
// import {MdChevronLeft , MdChevronRight} from "react-icons/md"
// import { GoArrowLeft } from "react-icons/go";

export default function MovieList(props) {
  const { title = "", url = "" } = props;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    api
      .get(url)
      .then(function (response) {
        setItems(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
      });
  }, []);
  function renderFarm() {
    return items.map((item) => {
      const { id, poster, title, country, year, imdb_rating } =
        item;
      return (
        <li key={id}>
          <Link to={`/item/${id}`}>
            <div className="card ">
              <div className="hover-box ">
                <div className="year">Year:{year}</div>
                <div className="country">Country:{country}</div>
                <div className="director">imdb_rating:{imdb_rating}</div>
              </div>
              <img className="poster" src={poster} />
              <h3 className="title">{title}</h3>
            </div>
          </Link>

        </li>
      );
    });
  }
  return (
    <Style>
      <div className="container ">
        <h2 className="title">{title}</h2>
      </div>
      <div id="slider" className="overflow-x-scroll scroll whitespace-nowrap scroll-smoth ">
      {<ul className="flex  gap-20">{renderFarm()}</ul>}
      </div>
    </Style>
  );
}
