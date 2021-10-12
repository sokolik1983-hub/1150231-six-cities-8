import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  // render: () => JSX.Element;
  authorizationStatus: boolean,
  path: string,
  exact: boolean
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {

  const {exact, path, authorizationStatus, component} = props;

  return (<div>{authorizationStatus ? <Route exact={exact} path={path} component={component} /> : <Redirect to='/Login'/>}</div>
  );
}

export default PrivateRoute;
