import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
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

<Route path="/blog">
          <Blog></Blog>
</Route>


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
    </div>
  );
}

export default App;
