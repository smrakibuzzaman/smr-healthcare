import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Details from './components/Details/Details';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
            <Navigation></Navigation>
      <Switch>
         <Route exact path="/">
              <Home></Home>
         </Route>

<Route path="/home">
              <Home></Home>
</Route>

<Route path="/about">
            <About></About>
</Route>

<Route path="/services">
          <Services></Services>
</Route>

<PrivateRoute exact path="/details/:serviceDescription">
            <Details></Details>
</PrivateRoute>

<PrivateRoute path="/blog">
          <Blog></Blog>
</PrivateRoute>


<Route path="/contact">
              <Contact></Contact>
</Route>

<Route path="/login">
        <Login></Login>
</Route>

<Route path="*">
  <NotFound></NotFound>
</Route>

      </Switch>

      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
