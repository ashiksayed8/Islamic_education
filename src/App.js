import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import About from './component/About/About';
import Service from './component/Service/Service';
import Faculty from './component/Faculty/Faculty';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App"> 
    {/* Create All Route here  */}
       <Router>
       <Header></Header>
          <Switch>    
            <Route exact path ="/">
              <Home></Home>
            </Route>
            <Route path ="/home">
              <Home></Home>
            </Route>
            <Route path ="/about">
              <About></About>       
            </Route>
            <Route path ="/service">
              <Service></Service>
            </Route>
            <Route path ="/faculty">
              <Faculty></Faculty>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
       </Router>    
    </div>
  );
}

export default App;
