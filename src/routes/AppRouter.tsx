import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login/Login";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Posts } from "@/pages/Posts/Posts";
import { NewPost } from "@/pages/Posts/NewPost";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<PrivateRouter />}>
          <Route path="/account"></Route>
        </Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/new-post" element={<NewPost />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
