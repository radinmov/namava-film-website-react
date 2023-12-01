import PrimaryLayout from "../../Layout/PrimaryLayout";
import App from "../../componets/Hero Movie";
import MovieList from "../../componets/MovieList";
import StartImg from "../../componets/Start-img";

export default function Homepage() {
  return (
    <PrimaryLayout>
      <App />
      <StartImg />
      <MovieList title="ویژه" url="movies" />
    </PrimaryLayout>
  );
}
