import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./test.css";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Style } from "./style";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <Style>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="one public">
          <div className="container relative">
            <div className="container_inner absolute">
              <img src="https://static.namava.ir/Content/Upload/Images/7ac51518-229a-4abe-b77a-a3059e1310f0.png" />
              <p className="title">مگه تموم عمر چند بهاره ؟ </p>
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
        </SwiperSlide>
        <SwiperSlide className="two public">
          <div className="container relative">
            <div className="container_inner absolute">
              <img src="https://static.namava.ir/Content/Upload/Images/a1bae310-f57d-480d-9a1a-b3277aece8fe.png" />
              <p className="title">گلدن کلوب ۲۰۲۴ </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="three public">
          <div className="container relative  ">
            <div className="container_inner absolute">
              <img src="https://static.namava.ir/Content/Upload/Images/56783b4b-e5e8-449f-89e9-ded64d23a018.png " />
              <p className="title">شریک جرم</p>
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
        </SwiperSlide>
        <SwiperSlide className="four public">
        <div className="container relative  ">
            <div className="container_inner absolute">
              <img src="https://static.namava.ir/Content/Upload/Images/99c96807-a4fe-4db8-abc5-bb19ff2d5f4a.png " />
              <p className="title">داوین چیز</p>
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
           </SwiperSlide>
      </Swiper>
    </Style>
  );
}
