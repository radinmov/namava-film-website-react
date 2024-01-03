import Header_2_licens from "../../componets/Header_licens";
import { Style } from "./style";
import useTitle from "../../componets/Hook/useTitle";

export default function Licens() {
    const title = useTitle("خرید اشتراک نماوا ");
    return (
        <Style>
            <Header_2_licens />
            <div className="container-2">
                <div className="container_inner">
                    <p>اشتراک خود را انتخاب کنید </p>
                    <div className="licens_1">
                        <div className="licens_1_inner flex ">
                            <div className="right">
                                <p>یک ماهه</p>
                                <p className="bck">  ویژّه خرید اول %۳۰ تخفیف</p>
                            </div>
                            <div className="left">
                                <span>۱۱۹,۰۰۰</span>
                                <span>تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}