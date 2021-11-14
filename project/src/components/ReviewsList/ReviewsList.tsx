import {Review} from '../../types/reviews';
import ReviewItem from '../ReviewItem/ReviewItem';

function ReviewsList (props: any) {
  const {reviews}: any = props;

  return (
    <ul className='reviews__list'>
      {
        reviews.map((item: Review) => (<ReviewItem key={item.id} reviews={item} />))
      }
    </ul>
  );
}
export default ReviewsList;
