import Header_2_licens from "../../componets/Header_licens";
import Footer from "../../componets/Footer/index";
import { Style } from "./style";
import useTitle from "../../componets/Hook/useTitle";

export default function Licens() {
  const title = useTitle("خرید اشتراک نماوا ");
  return (
    <Style>
      <Header_2_licens />

      <div
        className="container-2 flex  justify-center"
        style={{ marginTop: "100px" }}
      >
        <div className="container_inner">
          <p className="text-center " style={{ fontSize: "20px" }}>
            اشتراک خود را انتخاب کنید{" "}
          </p>
          <div className="licens_1 w-680">
            <div className="licens_1_inner relative ">
              <div className="right  absolute ">
                <p className="month text-right">یک ماهه</p>
                <p className="bck text-center"> ویژّه خرید اول %۳۰ تخفیف</p>
              </div>
              <div className="left absolute">
                <span className="price">۱۱۹,۰۰۰</span>
                <span className="price ">تومان</span>
              </div>
            </div>
          </div>
          <div className="licens_1 w-680">
            <div className="licens_1_inner relative ">
              <div className="right  absolute ">
                <p className="month text-right">یک ماهه</p>
                <p className="bck text-center"> ویژّه خرید اول %۳۰ تخفیف</p>
              </div>
              <div className="left absolute ">
                <span className="price">۱۱۹,۰۰۰</span>
                <span className="price ">تومان</span>
              </div>
            </div>
          </div>
          <div className="licens_1 w-680">
            <div className="licens_1_inner RadiusXS relative ">
              <div className="right  absolute ">
                <p className="month text-right">یک ماهه</p>
                <p className="bck RadiusXS text-center">
                  ویژّه خرید اول %۳۰ تخفیف
                </p>
              </div>
              <div className="left absolute ">
                <span className="price">۱۱۹,۰۰۰</span>
                <span className="price ">تومان</span>
              </div>
            </div>
          </div>
          <div className="for_sale ">
            <p className="offer text-right">ثبت کد تخفیف و یا کد هدیه </p>
            <div className="int_puts w-680 flex ">
              <button className="RadiusXS">اعمال </button>
              <input
                className="RadiusXS w-680"
                placeholder="ثبت کد تخفیف و یا کد هدیه"
              />
            </div>
          </div>
          <div className="buy_licens RadiusXS text-right for_sale relative w-680">
            <div className="txt absolute">
              <p className="s-18">
                :با خرید اشتراک به امکانات زیر دسترسی خواهید داشت
              </p>
              <ul>
                <li>
                  تماشای نامحدود هزاران فیلم و سریال و انیمیشن جذاب نماوا در طول
                  مدت اشتراک خریداری شده
                </li>
              </ul>
            </div>
          </div>
          <div className="wran w-680  RadiusXS relative text-right">
            <div className="tet absolute">
              <p className="fn s-18">
                تماشای فیلم های خارجی تنها برای کاربران داخل ایران امکان پذیر
                است
              </p>
              <p className="mg">
                کاربران خارج از ایران با خرید اشتراک نماوا، تنها به فیلم های
                ایرانی دسترسی خواهند داشت
              </p>
            </div>
          </div>
          <div className="support w-680 relative RadiusXS text-right">
            <div className="supp_inner absolute">
              <p>هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</p>
              <div className="under_support flex space-between">
                <span>۰۲۱-۹۱۰۰۰۱۱۱</span>
                <p>support@namava.ir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Style>
  );
}
