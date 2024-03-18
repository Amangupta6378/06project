import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Cards";
import Cards from "./Components/Cards";
// import Box from './Components/Box';

function App() {
  return (
    <div className="App">
   
      <Navbar></Navbar>
      <Cards></Cards>
    </div>
  );
}

export default App;
