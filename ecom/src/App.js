import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Navbar from './components/nav/navbar'
import Products from './views/product'
import Login from './views/login'
import Register from './views/register'
import Singleproduct from './views/singleproduct'

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
          <Route exact path="/singleproduct/:id" component={Singleproduct} />
        </Switch>
      </div>

      <footer className="footer"></footer>

    </BrowserRouter>
  );
}

export default App;
