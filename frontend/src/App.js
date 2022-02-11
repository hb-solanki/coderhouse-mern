import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './page/Home/Home.jsx'
import Navigation from './components/shared/Navigation/Navigation'
import Register from './page/Register/Register';
import Login from './page/Login/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/login"><Login/></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
