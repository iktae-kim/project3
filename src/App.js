import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ArrowRight, BalloonFill } from "react-bootstrap-icons";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import ProductAll from "./page/ProductAll";
import NavBar from "./component/NavBar";
import { useEffect, useState } from "react";
import PrivateRoute from "./Route/PrivateRoute";

function App() {
  //false는 로그인 x true o
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("로그인 상태 확인", authenticate);
  }, [authenticate]);
  return (
    <>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <div>
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route
            path="/login"
            element={<Login setAuthenticate={setAuthenticate} />}
          />
          <Route
            path="/product/:id"
            element={<PrivateRoute authenticate={authenticate} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
