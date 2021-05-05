import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Navbar from './components/nav/navbar'
import Products from './views/product'
import Login from './views/login'
import Register from './views/register'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
