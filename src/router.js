import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainForm from "./components/MainForm"; 
import TransportationApp from "./components/MainAppWrapper"; 
import './App.css';
const Routes = () => {
  return (  
    <> 
        <header className="app-header">
    <p>Transportation</p>
  </header>
      <Router>
      <div>
        <Switch> 
        <Route path="/" exact render={() =>  <TransportationApp/>}/>
        <Route exact path="/form/:id" render={(props) => <MainForm  {...props} /> } /> 
        <Route exact path="/form" render={(props) => <MainForm  {...props} /> } />
        </Switch>
      </div>
    </Router> 
    </>
  )
} 
export default Routes;