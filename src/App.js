import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import AddProducts from "./components/AddProducts/AddProducts";
import ChecKOut from "./components/CheckOut/ChecKOut";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import { useState } from "react";
import Oders from "./components/Oders/Oders";
import Login from "./components/Login/Login";
import { createContext } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext({});

function App() {
  const [header, setHeader] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <div className="main">
            <div>{!header && <h5 className="web-name">HR-DailyShop</h5>}</div>
            <div className="navbar">
              <nav>
                {!header && <Link to="/">Home</Link>}

                {!header && <Link to="/oders">Oders</Link>}

                {!header && (
                  <Link onClick={() => setHeader(!!header)} to="/admin">
                    Admin
                  </Link>
                )}

                {!header && <Link to="/dashboard">Deals</Link>}
              </nav>
            </div>
          </div>

          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/oders">
              <Oders></Oders>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <AddProducts></AddProducts>
            </PrivateRoute>
            <Route path="/dashboard"></Route>
            <PrivateRoute path="/checkout/:id">
              <ChecKOut></ChecKOut>
            </PrivateRoute>
            <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/manageProduct">
              <ManageProduct></ManageProduct>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
