//import logo from './logo.svg';
import "./App.css";
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from "./components/carousel/carousel";
import MyTitleMessage from "./components/carousel/title-message";
import About from "./views/about-me/About";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <MyTitleMessage />
      <About />
    </div>
  );
};

export default App;
