import Button from "../uiElements/Button";
import { Style } from "./style";

export default function Footer() {
  return (
    <Style>
      <div className="footer">
        <div className="container">
          <div className="flex space-between">
            <Button>اپلیکیشن‌ها</Button>
            <Button>فرصت‌های شغلی</Button>
            <Button>تبلیغات در نماوا</Button>
            <Button>خرید اشتراک</Button>
            <Button>کارت هدیه</Button>
            <Button>سوالات متداول</Button>
            <Button>تماس با ما</Button>
            <Button>درباره نماوا</Button>
            <Button>سایر لینک‌ها</Button>
          </div>
        </div>
        <div className="bottom-footer" />
      </div>
    </Style>
  );
}
