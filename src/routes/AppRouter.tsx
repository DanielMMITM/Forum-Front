import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/login"></Route>
        <Route element={<PrivateRouter />}>
          <Route path="/account"></Route>
          <Route path="/posts"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
