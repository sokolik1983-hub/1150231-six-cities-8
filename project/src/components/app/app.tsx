import {MainPageScreen, LoginPageScreen, PrivateRoute, FavoritesPageScreen, RoomPageScreen, NotFoundPageScreen} from 'components/config';
import cards from 'fixtures/offers';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import Loading from '../Loading/Loading';

const mapStateToProps = ({isDataLoaded}: State) => ({
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {isDataLoaded} = props;
  if(!isDataLoaded) {
    return (
      <Loading />
    );
  }
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
export {App};
export default connector(App);
