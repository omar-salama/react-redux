import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import { NotFound } from "./components/NotFound";
const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AppRouter;
