import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<PrivateRouter />}>
          <Route path="/account"></Route>
          <Route path="/posts"></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
