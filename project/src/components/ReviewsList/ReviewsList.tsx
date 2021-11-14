import {Review} from '../../types/reviews';
import ReviewItem from '../ReviewItem/ReviewItem';

type Props = {
  reviews: Review[];
}

function ReviewsList (props: Props): JSX.Element {
  const {reviews}: Props = props;

  return (
    <ul className='reviews__list'>
      {
        reviews.map((item: Review) => (<ReviewItem key={item.id} reviews={item} />))
      }
    </ul>
  );
}
export default ReviewsList;
