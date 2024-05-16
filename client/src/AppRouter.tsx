import { Routes, Route } from "react-router-dom";
import Home from "./features/users/Home";
import UserDetails from "./features/users/UserDetails";
import NotFound from "./components/NotFound";
const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AppRouter;
