import { api } from "../../utils/api";
import { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import PrimaryLayout from "../../Layout/PrimaryLayout";
import { Style } from "./style";
import useTitle from "../../componets/Hook/useTitle";

export default function Search() {
  const title = useTitle("جستجو");
  const [searchParams, setSearchParam] = useSearchParams();
  const [data, setData] = useState({
    data: [],
    metadata: {
      current_page: 1,
      per_page: 1,
      page_count: 10,
      total_count: 250,
    },
  });

  useEffect(() => {
    if (searchParams.get("q")) {
      getApi(searchParams.get("q"));
    }
  }, [searchParams]);

  function getApi(Search) {
    api
      .get("movies", { params: { q: Search } })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert("Error Fetching Datas:", error);
      });
  }
  function typing(event) {
    getApi(event.target.value);
    setSearchParam(createSearchParams({ q: event.target.value }));
  }

  function renderFarm() {
    if (data.data.length === 0) {
      return (
        // <img src="assets/logo/Not foubnd.png" />,
        <p className="text-center">موردی یافت نشد</p>
      );
    }
    return data.data.map(({ id, poster, title }) => (
      <li key={id}>
        <h2 className="tilte">{title}</h2>
        <img className="posted_imgs" src={poster} alt={title} />
      </li>
    ));
  }

  return (
    <PrimaryLayout>
      <Style>
        <div className="container-2">
          <div className="content">
            <div className="int">
              {/* <img src="assets/logo/search.svg" /> */}
              <input
                value={searchParams.get("q") ? searchParams.get("q") : ""}
                type="text"
                placeholder="فیلم، سریال، بازیگر و ژانر"
                onChange={typing}
              />
            </div>
          </div>
        </div>
        <ul>{renderFarm()}</ul>
      </Style>
    </PrimaryLayout>
  );
}
