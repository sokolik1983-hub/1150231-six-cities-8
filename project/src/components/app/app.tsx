import MainPageScreen from '../MainPageScreen/MainPageScreen';
import LoginPageScreen from '../LoginPageScreen/LoginPageScreen';
import FavoritesPageScreen from '../FavoritesPageScreen/FavoritesPageScreen';
import RoomPageScreen from '../RoomPageScreen/RoomPageScreen';
import NotFoundPageScreen from '../NotFoundPageScreen/NotFoundPageScreen';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ MainPageScreen } />
        <Route path='/login' exact component={ LoginPageScreen } />
        <PrivateRoute authorizationStatus={false} path='/favorites' exact component={ FavoritesPageScreen } />
        <Route path='/offer/:id' exact component={ RoomPageScreen } />
        <Route>
          <NotFoundPageScreen />
        </Route>
      </Switch>
    </BrowserRouter>);
}

export default App;
