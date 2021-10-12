import {Link} from 'react-router-dom';

function NotFoundPageScreen(): JSX.Element {
  return (
    <div className='page404__wrap'>
      <img src='img/404.png' alt='' />
      <Link to='/'>Вернуться на главную</Link>
    </div>
  );
}
export default NotFoundPageScreen;
