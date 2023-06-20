import "./styles.css";
import Navbar from "./navbar";
import Measurements from "./convert";

export default function App() {
  return (
    <div className="App">
      <Navbar title="Measurements" />
      <Measurements />
    </div>
  );
}
