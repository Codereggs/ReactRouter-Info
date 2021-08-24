import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Acerca } from "../paginas/Acerca";
import { Contacto } from "../paginas/Contacto";
import Dashboard from "../paginas/Dashboard";
import Error404 from "../paginas/Error404";
import Home from "../paginas/Home";
import Login from "../paginas/Login";
import Productos from "../paginas/Productos";
import ReactTopics from "../paginas/ReactTopics";
import Usuario from "../paginas/Usuario";
import { MenuConceptos } from "./MenuConceptos";
import PrivateRoute from "./PrivateRoute";

export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
      <hr />
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
          <Route path="/react" component={ReactTopics} />
          <Route exact path="/login" component={Login} />

          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          {/*Si o si se carga al final el error 404*/}
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};
