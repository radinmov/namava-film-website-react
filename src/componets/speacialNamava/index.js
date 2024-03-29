import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { Link } from "react-router-dom";
import { Style } from "./style";

export default function Speacial(props) {
  const { title = "", url = "" } = props;
  const [items, setItems] = useState([]);

  useEffect(function () {
    api
      .get(url)
      .then(function (response) {
        setItems(response.data.data);
      })
      .catch(function (error) {});
  }, []);
  // orifin  mian  upstsvuj
  function renderFarm() {
    return items.map((item) => {
      const { id, poster, title, year, country, imdb_rating } = item;
      return (
        <li key={id}>
          <Link to={`/item/${id}`}>
            <div className="card  card-2 ">
              <div className="hover-box hover-box-2">
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
      <div className="container-2 ">
        <h2 className="title">{title}</h2>
      </div>
      {items.length > 0 ? (
        renderFarm
      ) : (
        <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600 m-auto" />
      )}
      <div
        id="slider"
        className="overflow-x-scroll  whitespace-nowrap scroll-smoth "
      >
        {<ul className="flex  gap-10 m-4">{renderFarm()}</ul>}
      </div>
    </Style>
  );
}
