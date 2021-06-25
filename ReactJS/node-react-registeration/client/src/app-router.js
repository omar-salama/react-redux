import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import UserDetails from "./components/UserDetails"
import { NotFound } from "./components/NotFound";
const Routes = () => {
  return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/user/:id" component={UserDetails}/>
        <Route path="*" component={NotFound}/>
      </Switch>
  );
};

export default Routes;
