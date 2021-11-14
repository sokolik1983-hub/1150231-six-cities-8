import {Dispatch, SetStateAction} from 'react';

const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];
type Props = {
  currentCity: string;
  setCurrentCity:  Dispatch<SetStateAction<string>>;
}
function ListCities (props: Props): JSX.Element {
  const {currentCity, setCurrentCity} = props;

  const handleClick = (item:string) => {
    setCurrentCity(item);
  };
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {
            cities.map((item) => (
              <li key={item} className='locations__item'>
                <a onClick={() => handleClick(item)} className={`locations__item-link ${currentCity === item && 'active'} tabs__item`} href='/#'>
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
