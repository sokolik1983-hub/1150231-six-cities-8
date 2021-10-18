import CardProps from 'types/cardProps';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

interface Props {
  items: CardProps[]
}

function FavoriteListCard({items}: Props): JSX.Element {

  return (
    <ul className='favorites__list'>
      {
        [...(new Set(items.map((item) => item.city)))]?.map((elem: string, index) => (
          <li key={index.toString()} className='favorites__locations-items'>
            <div className='favorites__locations locations locations--current'>
              <div className='locations__item'>
                <a className='locations__item-link' href='/#'>
                  <span>{ elem }</span>
                </a>
              </div>
            </div>
            <div className='favorites__places'>
              {items?.filter((item) => item.city === elem).map((item) => (<FavoriteCard key={item.id} {...item} />))}
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default FavoriteListCard;
