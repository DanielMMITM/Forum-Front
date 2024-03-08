import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import { Home } from "@/pages/Home/Home";
import { NavBar } from "@/components/NavBar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<h1>Login</h1>}></Route>
        <Route element={<PrivateRouter />}>
          <Route path="/account"></Route>
          <Route path="/posts"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
