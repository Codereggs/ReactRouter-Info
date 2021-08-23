import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Acerca } from "../paginas/Acerca";
import { Contacto } from "../paginas/Contacto";
import Error404 from "../paginas/Error404";
import Home from "../paginas/Home";
import Productos from "../paginas/Productos";
import Usuario from "../paginas/Usuario";
import { MenuConceptos } from "./MenuConceptos";

export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="/usuario/:username" component={Usuario} />
          <Route path="/productos" component={Productos} />
          <Route path="/about">
            <Redirect to="/acerca" />{" "}
          </Route>
          <Route path="/contact">
            <Redirect to="/contacto" />
          </Route>
          {/*Si o si se carga al final el error 404*/}
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};
