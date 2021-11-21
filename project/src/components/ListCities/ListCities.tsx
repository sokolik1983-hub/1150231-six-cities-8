import {Cities} from '../../types/offer';

type Props = {
  city: Cities;
  onClickCity: (city: Cities) => void;
  listCities: Cities[],
}

function ListCities(props: Props): JSX.Element {
  const {city, onClickCity, listCities} = props;

  /* eslint-disable no-console */
  console.log('отрисовка');
  /* eslint-enable no-console */

  const handleClick = (item: Cities) => {
    if(city === item) {
      onClickCity(item);
    }
  };
  return (
    listCities &&
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              {
                listCities?.map((item: Cities) => (
                  <li key={`${item}`} className='locations__item'>
                    <a onClick={() => handleClick(item)} className='locations__item-link tabs__item' href='/#' >
                      <span>{item}</span>
                    </a>
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
