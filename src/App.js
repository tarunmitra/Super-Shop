import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Error from './components/Home/Error/Error';
import Login from './components/Home/Login/Login';
import Admin from './components/Home/Admin/Admin';
import Header from './components/Home/Header/Header';
import Product from './components/Product/Product';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

export const UserContext = createContext();






function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="container">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/product/:id">
            <Product></Product>
          </PrivateRoute>

          <PrivateRoute path="/order">
          <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <Route path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </Route>

          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>
      </Router>
      </UserContext.Provider>
      </div>
  );
}

export default App;
