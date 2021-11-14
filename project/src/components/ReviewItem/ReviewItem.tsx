type Props = {
  reviews: Reviews,
}
type Reviews = {
  comment: string,
  user: User,
  rating: number,
  date: string
}
type User = {
  avatarUrl: string;
  name: string;
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function ReviewItem (props: Props): JSX.Element {

  const {comment , user, rating = 5, date}: Reviews = props.reviews;

  const widthRating = 20 * rating;

  const year = date.split('-')[0];
  const month: string = date.split('-')[1];
  const monthIndex: number = +month.replace(/^0+/, '') - 1;

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img className='reviews__avatar user__avatar' src={user.avatarUrl} width='54' height='54' alt='Reviews avatar' />
        </div>
        <span className='reviews__user-name'>{user.name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{width: `${widthRating}%`}} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>
          {comment}
        </p>
        <time className='reviews__time' dateTime='2019-04-24'>{monthNames[monthIndex]} {year}</time>
      </div>
    </li>
  );
}
export default ReviewItem;
