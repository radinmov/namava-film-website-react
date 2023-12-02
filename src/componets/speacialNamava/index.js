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
      .catch(function (error) {
      });
  }, []);
  function renderFarm() {
    return items.map((item) => {
      const { id, poster, title } = item;
      return (
        <li key={id}>
          <Link to={`/item/${id}`}>
            <div className="card ">
              <img src={poster} />
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
      {<ul className="flex flex-wrap gap-10">{renderFarm()}</ul>}
    </Style>
  );
}
