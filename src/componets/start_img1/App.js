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
        <SwiperSlide className="two public"></SwiperSlide>
        <SwiperSlide className="three public"> </SwiperSlide>
        <SwiperSlide className="four public"> </SwiperSlide>
      </Swiper>
    </Style>
  );
}
