//import logo from './logo.svg';
import "./App.css";
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from "./components/carousel/carousel";
import MyTitleMessage from "./components/carousel/title-message";

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
