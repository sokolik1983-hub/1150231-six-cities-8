import MainPageScreen from '../MainPageScreen/MainPageScreen';
import AllObjectsAmount from '../../types/types';

function App({allObjects} : AllObjectsAmount ): JSX.Element {
  return <MainPageScreen allObjects={allObjects} />;
}

export default App;
