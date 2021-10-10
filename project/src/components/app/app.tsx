import Main from '../Main/main';

type num = { amount: number };

function App({amount}: num ): JSX.Element {
  return <Main amount={amount} />;
}

export default App;
