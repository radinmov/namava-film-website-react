import PrimaryLayout from "../../Layout/PrimaryLayout";
import App from "../../componets/Hero Movie";
import MovieList from "../../componets/MovieList";
import Stars from "../../componets/Stars";
import StartImg from "../../componets/Start-img";
import Speacial from "../../componets/speacialNamava";

export default function Homepage() {
  return (
    <PrimaryLayout>
      <App />
      <StartImg />
      <MovieList title="ویژه" url="movies" />
      <Speacial title="اختصاصی نماوا" url="movies?page=4" />
      <MovieList title="رایگان در نماوا" url="movies?page=5" />
      <MovieList title="تازه های نماوا" url="movies?page=4" />
      <MovieList title=" سریال های به روز شده  " url="movies?page=2" />
      <MovieList title="سریال های ایرانی" url="movies?page=9" />
      <Speacial title=" دوبله نماوا" url="movies?page=11" />
      <MovieList title="ایرانی" url="movies?page=14" />
      <MovieList title="اکشن" url="movies?page=15" />
      <MovieList title="کمدی" url="movies?page=16" />
      <Stars />
      <MovieList title="خانوادگی" url="movies?page=17" />
      <MovieList title="کره ای " url="movies?page=18" />
      
    </PrimaryLayout>
  );
}
