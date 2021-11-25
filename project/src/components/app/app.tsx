import {MainPageScreen, LoginPageScreen, PrivateRoute, FavoritesPageScreen, RoomPageScreen, NotFoundPageScreen} from 'components/config';
import cards from 'fixtures/offers';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={() => <MainPageScreen />} />
        <Route path='/login' exact component={ LoginPageScreen } />
        <PrivateRoute component={() => <FavoritesPageScreen items={cards}  /> }  authorizationStatus path='/favorites' exact />
        <Route path='/offer/:id' exact component={ RoomPageScreen } />
        <Route>
          <NotFoundPageScreen />
        </Route>
      </Switch>
    </BrowserRouter>);
}

export default App;
