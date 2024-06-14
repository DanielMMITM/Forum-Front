import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Auth/Login";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Posts } from "@/pages/Posts/Posts";
import { NewPost } from "@/pages/Posts/NewPost";
import { SignUp } from "@/pages/Auth/SignUp";
import { ShowPost } from "@/pages/Posts/ShowPost";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route index path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route element={<PrivateRouter />}>
          <Route path="/profile"></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/posts/:id" element={<ShowPost />}></Route>
          <Route path="/new-post" element={<NewPost />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
