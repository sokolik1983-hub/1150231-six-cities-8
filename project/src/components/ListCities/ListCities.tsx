import {Cities} from '../../types/offer';
import {MouseEvent} from 'react';

type Props = {
  city: Cities;
  onClickCity: (city: Cities) => void;
  listCities: Cities[],
}


function ListCities (props: Props): JSX.Element {
  const {city, onClickCity, listCities} = props;

  const handleClick = (e: MouseEvent, item: Cities) => {
    e.preventDefault();
    onClickCity(item);
  };
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {
            listCities.map((item: Cities) => (
              <li key={`${item}`} className='locations__item'>
                {
                  (city !== item)
                    ?
                    <a onClick={(e) => handleClick(e, item)} className='locations__item-link tabs__item' href='/#'>
                      <span>{item}</span>
                    </a>
                    :
                    <a className='locations__item-link active tabs__item' href='/#'>
                      <span>{item}</span>
                    </a>
                }
              </li>
            ),
            )
          }
        </ul>
      </section>
    </div>
  );
}

export default ListCities;
