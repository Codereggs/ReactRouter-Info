import { Link, NavLink } from "react-router-dom";

export const MenuConceptos = () => {
  return (
    <div>
      <nav>
        <ol>
          <li>
            <span>
              Menú enlaces HTML<em> no recomendado. </em>
            </span>
            <a href="/">Menú</a>
            <a href="/acerca">Acerca</a>
            <a href="/contacto">Contacto</a>
          </li>
          <li>
            <span>Componente Link: </span>
            <Link to="/">Menú</Link>
            <Link to="/acerca">Acerca</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/no-existe">Error404</Link>
          </li>
          <li>
            <span>Componente NavLink:</span>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink exact to="/acerca" activeClassName="active">
              Acerca
            </NavLink>
            <NavLink exact to="/contacto" activeClassName="active">
              Contacto
            </NavLink>
            {/* <NavLink to="/no-existe" activeClassName="active">
              Error 404
            </NavLink> */}
          </li>
          <li>
            <span>Parámetros:</span>
            <Link to="/usuario/codereggs">Codereggs</Link>
            <Link to="/usuario/davidsgs">Davidsgs</Link>
          </li>
          <li>
            <span>Párametros de consulta:</span>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <span>Redirecciones: </span>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};
