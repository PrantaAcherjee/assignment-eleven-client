import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider'
import About from './Components/About/About';
import Error from './Components/Error/Error';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Order/Order';
import AddService from './Components/AddService/AddService';
import ManageUser from './Components/ManageUser/ManageUser';
import FAQ from './Components/FAQ/FAQ';
import Confirm from './Components/ConfirmOrder/Confirm';

function App() {
  return (
    <div className="App">
     
  <AuthProvider>
  <BrowserRouter>
       <Header></Header>
      <Switch>
      <Route exact path="/">
      < Home></Home>
      </Route>
      <Route path="/home">
      <Home></Home>
      </Route>
        <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <PrivateRoute path="/order/:_id">
      <Order></Order>
      </PrivateRoute>
    <PrivateRoute path="/addservice">
    <AddService></AddService>
    </PrivateRoute>
    <PrivateRoute path="/manageuser">
      <ManageUser></ManageUser>
    </PrivateRoute>
    <Route path="/confirm">
      <Confirm></Confirm>
    </Route>
    <Route path="/faq">
      <FAQ></FAQ>
    </Route>
      <Route path="*">
        <Error></Error>
      </Route>
      </Switch>
      </BrowserRouter>
  </AuthProvider>
     
    </div>
  );
}

export default App;
