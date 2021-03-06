import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import {Offer} from '../../types/offer';

function Card(props : Offer): JSX.Element {
  const [activeCard, setActiveCard] = useState(-1);

  const { id, type, price, title, isPremium, previewImage } = props;

  const history = useHistory();

  const handleChange = () => {
    history.push(`/offer/${activeCard}`, props);
  };
  return (
    <article className='cities__place-card place-card'
      onMouseEnter={() => setActiveCard(id)}
      onClick={handleChange}
      onMouseLeave={() => setActiveCard(-1)}
    >
      {Boolean(isPremium) && <div className='place-card__mark'><span>Premium</span></div>}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${id}`}>
          <img className='place-card__image' src={previewImage} width='260' height='200' alt='' />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro; {price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'/>
            </svg>
            <span className='visually-hidden'>To bookmarks{id}</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: '80%'}}/>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${ id }`}>
            {title}
          </Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}

export default Card;
