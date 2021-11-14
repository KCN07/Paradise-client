import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Nav from "./pages/Shared/Nav/Nav";
import NotFound from "./pages/NotFound/NotFound";
import Explore from "./pages/Explore/Explore/Explore";
import Footer from "./pages/Shared/Footer/Footer";
import AuthProvider from "./contexts/Authprovider/AuthProvider";
import Login from "./pages/Account/Login/Login";
import Register from "./pages/Account/Register/Register";
import PrivateRoute from "./pages/Account/PrivateRoute/PrivateRoute";
import Purchase from "./pages/Purchase/Purchase";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
       <AuthProvider>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/purchase/:id">
             <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/Dashboard">
              <Dashboard></Dashboard>
            </Route>
          <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
