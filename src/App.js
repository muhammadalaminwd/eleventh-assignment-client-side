import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Blogs from "./Pages/Blogs/Blogs";
import InventoryDetail from "./Pages/Login/InventoryDetail/InventoryDetail";
import ManageInventories from "./Pages/Home/ManageInventories/ManageInventories";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventory/:id"
          element={
              <InventoryDetail></InventoryDetail>
          }
        ></Route>
        <Route
          path="/manageinventories"
          element={<ManageInventories></ManageInventories>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
