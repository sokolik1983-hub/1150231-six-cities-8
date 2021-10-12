import {MainPageScreen, LoginPageScreen, PrivateRoute, FavoritesPageScreen, RoomPageScreen, NotFoundPageScreen} from 'components/config';
import cards from 'fixtures/cards';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={() => <MainPageScreen items={cards} />} />
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
