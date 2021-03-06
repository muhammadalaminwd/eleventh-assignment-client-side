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
import MyItem from "./Pages/MyItem/MyItem";
import AddItem from "./Pages/AddItem/AddItem";
import Inventories from "./Pages/Home/Inventories/Inventories";

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
        <Route path="/inventories" element={<Inventories></Inventories>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <InventoryDetail></InventoryDetail>
              </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventories"
          element={
            <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
                  }
        ></Route>
        
        <Route path="/myitem" element={
          <RequireAuth>
          <MyItem></MyItem>
          </RequireAuth>
        }>
        </Route>
        <Route path="/additem" element={
          <RequireAuth>
          <AddItem></AddItem>
          </RequireAuth>
        }>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
