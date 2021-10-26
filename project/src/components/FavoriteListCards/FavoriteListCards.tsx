import { BaseCard } from 'types/cardProps';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

interface Props {
  items: BaseCard[]
}

function FavoriteListCard({items}: Props): JSX.Element {
  const cityArray = [...(new Set(items.map((item) => item.city)))]; //Собираем массив городов, которые у нас есть и избавляемся от повторов.
  return (
    <ul className='favorites__list'>
      {
        cityArray?.map((city: string) => (
          <li key={city} className='favorites__locations-items'>
            <div className='favorites__locations locations locations--current'>
              <div className='locations__item'>
                <a className='locations__item-link' href='/#'>
                  <span>{ city }</span>
                </a>
              </div>
            </div>
            <div className='favorites__places'>
              {items?.filter((item) => item.city === city).map((item) => (<FavoriteCard key={item.id} {...item} />))}
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default FavoriteListCard;
