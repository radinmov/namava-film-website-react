import { useParams } from "react-router-dom";
import { Style } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";

export default function SingleMovie() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(function () {
    api
      .get(`/movies/${id}`)
      .then(function (res) {
        setData(res.data);
      })
      .catch(function () {});
  }, []);

  return (
    <Style>
      <div className="container flex">
        <img src={data.poster} />
        <div className="txt">
          <h1 className="title">{data.title}</h1>
          <h1 className="title">genres:{data.genres}</h1>
          <h1 className="title">country:{data.country}</h1>
          <h2 className="title">director:{data.director}</h2>
          <h2 className="title">imdb_rating:{data.imdb_rating}</h2>
          <h2 className="title">year:{data.year}</h2>
        </div>
      </div>
    </Style>
  );
}
