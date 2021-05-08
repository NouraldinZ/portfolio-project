//import logo from './logo.svg';
import "./App.css";
import MyNavbar from "./components/Navbar/navbar";
import MyCarousel from "./components/Carousel/carousel";
import MyTitleMessage from "./components/Carousel/titleMessage";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <MyTitleMessage />
    </div>
  );
};

export default App;
