import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./features/users/AddForm";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Form />
      <div className="container">
        <AppRouter />
      </div>
    </Provider>
  );
};

export default App;
