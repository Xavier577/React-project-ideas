import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import DashBoard from "./pages/dashboard";
import AdminPage from "./pages/adminPage";
import HomePage from "./pages/homepage";
import "./styles/global.css";

function App() {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/dashboard" render={() => <DashBoard />} />
          <Route exact path="/management" render={() => <AdminPage />} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
