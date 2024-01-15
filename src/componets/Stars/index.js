import { Style } from "./style";

export default function Stars() {
  let stars = [
    {
      name: "مایکل فسبندر   ",
      img: "https://static.namava.ir/Content/Upload/Images/e3200e1d-d803-44cd-b888-eacb1a2e37c5.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
    },
    {
      name: "رابرت داونی جونیور ",
      img: "https://static.namava.ir/Content/Upload/Images/497c69bf-1222-403f-91da-c92e8acf5954.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
    },
    // {
    //   name: "رایان گاسلینگ",
    //   img: "https://static.namava.ir/Content/Upload/Images/268bb36d-00d4-4027-bf26-41cbf5ed207e.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
    // },
    // {
    //   name: "رایان گاسلینگ",
    //   img: "https://static.namava.ir/Content/Upload/Images/268bb36d-00d4-4027-bf26-41cbf5ed207e.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
    // },
    {
      name: "واکین فینکس",
      img: "https://static.namava.ir/Content/Upload/Images/a95217fb-aa7b-4333-a3db-2975a88ffc8d.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
    },
    {
      name: "مایکل فسبندر   ",
      img: "https://static.namava.ir/Content/Upload/Images/e3200e1d-d803-44cd-b888-eacb1a2e37c5.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
    },
  ];
  function renderFarm() {
    return stars.map(({ name, img }, index) => {
      return (
        <li key={index}>
          <img src={img} />
          <h5 className="center title ">{name}</h5>
        </li>
      );
    });
  }
  return (
    <Style>
      <div className="container-2 ">
        <h2 className="title text-right mr-4">ستارگان</h2>
        {stars.length > 0 ? (
          renderFarm
        ) : (
          <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600 m-auto" />
        )}

          <ul className="flex gap-40 justify-center overflow-x-scroll scroll  whitespace-nowrap scroll-smoth ">{renderFarm()}</ul>
        
      </div>
    </Style>
  );
}
