import "./App.css";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home"
import NavBar from "./components/common/NavBar"

function App() {
  return (
    <div className="w-screem min-h-screen bg-richblack-900 flex flex-col">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
   
  );
}

export default App;
