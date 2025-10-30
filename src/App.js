import "./App.css";
import Navbar from "./components/Navbar";
import Mainheader from "./components/Mainheader";
import ImageGrid from "./components/ImageGrid";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Mainheader />
      <ImageGrid />
    </Router>
  );
}

export default App;
