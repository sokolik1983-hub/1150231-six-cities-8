import {useHistory} from 'react-router-dom';
import { BaseCard } from 'types/cardProps';

function FavoriteCard(props: BaseCard): JSX.Element {

  const {id, src, type, price, title, isPremium} = props;

  const history = useHistory();

  const handleChange = () => {
    history.push(`/offer/${id}`, { type , price, title, isPremium});
  };

  return (
    <article className='favorites__card place-card' onClick={handleChange}>
      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <img className='place-card__image' src={src} width='150' height='110' alt=''/>
      </div>
      <div className='favorites__card-info place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price ?? 0}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button place-card__bookmark-button--active button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: '100%'}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          {title ?? 'Standart title'}
        </h2>
        <p className='place-card__type'>{type ?? 0}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
