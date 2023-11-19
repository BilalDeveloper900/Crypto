import "./App.css";
import Container1 from "./Components/Container1";
import Container2 from "./Components/Container2";
import Container3 from "./Components/Container3";
import Container4 from "./Components/Container4";
import Container5 from "./Components/Container5";
import Navbar from "./Components/Navbar";
import Last from "./Components/Last";

function App() {
  return (
    <div>
      <Navbar />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Last />
    </div>
  );
}

export default App;
