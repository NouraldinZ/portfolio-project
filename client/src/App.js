import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./container/Container";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Container />
    </div>
  );
}

export default App;
