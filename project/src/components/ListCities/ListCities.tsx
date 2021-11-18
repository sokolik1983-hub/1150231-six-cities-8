const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

type Props = {
  city: string;
  onClickCity: any;
}


function ListCities (props: Props): JSX.Element {
  const {city, onClickCity} = props;

  const handleClick = (item:string) => {
    onClickCity(item);
  };
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {
            cities.map((item) => (
              <li key={item} className='locations__item'>
                <a onClick={() => handleClick(item)} className={`locations__item-link ${city === item && 'active'} tabs__item`} href='/#'>
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
