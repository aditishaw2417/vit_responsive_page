import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PhotoSlider from "./components/PhotoSlider";
import ArticleSection from "./components/ArticleSection";
import PieChart from "./components/PieChart";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <PhotoSlider></PhotoSlider>
      <ArticleSection></ArticleSection>
      <PieChart></PieChart>
      <Footer></Footer>
    </>
  );
};

export default App;
