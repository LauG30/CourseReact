import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EjercicioUno from "./components/ejercicioUno";

function App() {
  return (
    <Router>
    <div className="Container">
      <div className="btn-group">
        <Link to="/ejercicioUno" className="btn btn-dark">Ejercicio 1</Link>
      </div>
      <hr />
      <Switch>
        <Route path="/ejercicioUno">
          <EjercicioUno />
        </Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
