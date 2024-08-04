import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper } from "./components/organism/wrapper";
import { Home, NotFound } from "./pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="*" element={<NotFound />} />
          <Route path="" element={<Home />} />
          <Route path="tasks" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
