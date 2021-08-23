import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const ReactTopics = () => {
  //let match = useRouteMatch();
  //console.log(match);

  /*Path para route y url para nav y navlink */

  const Topic = () => {
    let { topic } = useParams();
    return (
      <div>
        <h4>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          molestias maiores natus corporis harum. Voluptate beatae ipsum veniam
          id doloremque facilis maiores excepturi delectus necessitatibus,
          commodi omnis sequi corporis quidem!
        </p>
      </div>
    );
  };
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}`}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            quas adipisci id, libero molestias excepturi consequuntur! Magnam
            cupiditate dolores voluptatum, nemo nulla quaerat enim hic alias
            laborum, labore repellendus quisquam.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
