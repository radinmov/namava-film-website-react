import { Link } from "react-router-dom";
import { Style } from "./Style";

export default function StartImg() {
  return (
    <Style>
        <div id="slider" className="overflow-x-scroll  whitespace-nowrap scroll-smoth flex justify-center">
        <Link to={"/one"} >
      <div className="container flex justify-center gap-20">
        <img src="https://static.namava.ir/Content/Upload/Images/a4537741-0903-4b6c-b18e-0a7f40e3513b.jpg?anchor=middlecenter&crop=auto&scale=both&w=750&h=300" />
        <img src="https://static.namava.ir/Content/Upload/Images/55d5e654-c217-4fba-a47e-e2fdca0f2412.jpg?anchor=middlecenter&crop=auto&scale=both&w=750&h=300" />
        <img src="https://static.namava.ir/Content/Upload/Images/1f1e708e-69f5-45b1-a9a0-40fe28492d2b.jpg?anchor=middlecenter&crop=auto&scale=both&w=750&h=300" />
      </div> 
        </Link>
      </div>
    </Style>
  );
}
