import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EjercicioUno from "./components/ejercicioUno";
import EjercicioDos from "./components/ejercicioDos";
import EjercicioTres from "./components/ejercicioTres";
import EjercicioCuatro from "./components/ejercicioCuatro";
import EjercicioCinco from "./components/ejercicioCinco";
import EjercicioSeis from "./components/ejercicioSeis";
import EjercicioSiete from "./components/ejercicioSiete";
import EjercicioOcho from "./components/ejercicioOcho";
import EjercicioNueve from "./components/ejercicioNueve";
import EjercicioDiez from "./components/ejercicioDiez";
import EjercicioOnce from "./components/ejercicioOnce";
import EjercicioDoce from "./components/ejercicioDoce";
import EjercicioTrece from "./components/ejercicioTrece";
import EjercicioCatorce from "./components/ejercicioCatorce";
import EjercicioQuince from "./components/ejercicioQuince";
import EjercicioDieciseis from "./components/ejercicioDieciseis";
import EjercicioDiecisiete from "./components/ejercicioDiecisiete";
import EjercicioDieciocho from "./components/ejercicioDieciocho";

function App() {
  return (
    <Router>
      <div className="Container">
        <div className="btn-group">
          <Link to="/ejercicioUno" className="btn btn-dark">Ejercicio 1</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioDos" className="btn btn-dark">Ejercicio 2</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioTres" className="btn btn-dark">Ejercicio 3</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioCuatro" className="btn btn-dark">Ejercicio 4</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioCinco" className="btn btn-dark">Ejercicio 5</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioSeis" className="btn btn-dark">Ejercicio 6</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioSiete" className="btn btn-dark">Ejercicio 7</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioOcho" className="btn btn-dark">Ejercicio 8</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioNueve" className="btn btn-dark">Ejercicio 9</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioDiez" className="btn btn-dark">Ejercicio 10</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioOnce" className="btn btn-dark">Ejercicio 11</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioDoce" className="btn btn-dark">Ejercicio 12</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioTrece" className="btn btn-dark">Ejercicio 13</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioCatorce" className="btn btn-dark">Ejercicio 14</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioQuince" className="btn btn-dark">Ejercicio 15</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioDieciseis" className="btn btn-dark">Ejercicio 16</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioDiecisiete" className="btn btn-dark">Ejercicio 17</Link>
        </div>
        <div className="btn-group">
          <Link to="/ejercicioDieciocho" className="btn btn-dark">Ejercicio 18</Link>
        </div>
        <hr />
        <Switch>
          <Route path="/ejercicioUno">
            <EjercicioUno />
          </Route>
          <Route path="/ejercicioDos">
            <EjercicioDos />
          </Route>
          <Route path="/ejercicioTres">
            <EjercicioTres />
          </Route>
          <Route path="/ejercicioCuatro">
            <EjercicioCuatro />
          </Route>
          <Route path="/ejercicioCinco">
            <EjercicioCinco />
          </Route>
          <Route path="/ejercicioSeis">
            <EjercicioSeis />
          </Route>
          <Route path="/ejercicioSiete">
            <EjercicioSiete />
          </Route>
          <Route path="/ejercicioOcho">
            <EjercicioOcho />
          </Route>
          <Route path="/ejercicioNueve">
            <EjercicioNueve />
          </Route>
          <Route path="/ejercicioDiez">
            <EjercicioDiez />
          </Route>
          <Route path="/ejercicioOnce">
            <EjercicioOnce />
          </Route>
          <Route path="/ejercicioDoce">
            <EjercicioDoce />
          </Route>
          <Route path="/ejercicioTrece">
            <EjercicioTrece />
          </Route>
          <Route path="/ejercicioCatorce">
            <EjercicioCatorce />
          </Route>
          <Route path="/ejercicioQuince">
            <EjercicioQuince />
          </Route>
          <Route path="/ejercicioDieciseis">
            <EjercicioDieciseis />
          </Route>
          <Route path="/ejercicioDiecisiete">
            <EjercicioDiecisiete />
          </Route>
          <Route path="/ejercicioDieciocho">
            <EjercicioDieciocho />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
