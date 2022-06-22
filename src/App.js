
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/App.scss"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="Login" element={<Login/>}/>
                    <Route path="Users">
                        <Route index element={<List/>}/>
                        <Route path=":userID" element={<Single/>}/>
                        <Route path="New" element={<New/>}/>
                    </Route>
                    <Route path="Products">
                        <Route index element={<List/>}/>
                        <Route path=":productID" element={<Single/>}/>
                        <Route path="new" element={<New/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
