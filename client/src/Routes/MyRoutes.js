import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNews from "../Pages/AddNews";
//import pages here
import Home from "../Pages/Home";
function MyRoutes(){
    return(
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/addnews" element={<AddNews/>}></Route>
        </Routes>
      </BrowserRouter>
    );
}
export default MyRoutes;