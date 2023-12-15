import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { Link } from "react-router-dom";
import { Style } from "./style";
import "./index.css"

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
              <div className="hover-box  ">
                <div className="year w-24">Year:{year}</div>
                <div className="country w-24 ">Country:{country}</div>
                <div className="director w-24">imdb_rating:{imdb_rating}</div>
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
      <div className="container-2 w-full ">
        <h2 className="title">{title}</h2>
      </div>
      <div id="slider" className="overflow-x-scroll w-full  whitespace-nowrap scroll-smoth ">
      {<ul className="flex  gap-20">{renderFarm()}</ul>}
      </div>
    </Style>
  );
}
