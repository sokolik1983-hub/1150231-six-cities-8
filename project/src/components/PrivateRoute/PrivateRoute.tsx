import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  // render: () => JSX.Element;
  authorizationStatus: boolean;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {

  const {exact, path, authorizationStatus, component, children} = props;

  return (
    <Route exact={exact} path={path} component={component}>
      {authorizationStatus  ? (
        children
      ) : (
        <Redirect to='/Login' />
      )}
    </Route>);
}

export default PrivateRoute;
