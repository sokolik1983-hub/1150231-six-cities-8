import {Route, Redirect, RouteProps} from 'react-router-dom';


type PrivateRouteProps = RouteProps & {
  authorizationStatus: boolean,
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {

  const {exact, path, authorizationStatus, component: Component} = props;

  return (
    <Route exact={exact} path={path} render={(items) => {
      if (authorizationStatus && Component) {
        return (
          <Component {...items} />
        );
      }
      return (
        <Redirect to={'/login'}/>
      );
    }}
    />
  );
}

export default PrivateRoute;
