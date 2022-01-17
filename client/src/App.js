import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";
import {Routes, Route,BrowserRouter} from "react-router-dom";


 

function App() {
  return (
    
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route exact path ="/"  element ={<Home /> }/>
        <Route path ="/login"  element ={<Login /> }/>
        <Route path ="/register"  element ={<Register /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
