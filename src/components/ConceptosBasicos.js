import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <h3>Home</h3>
            <p>Bienvenidos al tema de las rutas en react.</p>
          </Route>
          <Route exact path="/acerca">
            <h3>Acerca</h3>
          </Route>
          <Route exact path="/contacto">
            <h3>Contacto</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
