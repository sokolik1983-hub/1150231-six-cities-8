type Props = {
  city: string;
  onClickCity: (city: string) => void;
  listCities: string[],
}


function ListCities(props: Props): JSX.Element {
  const {city, onClickCity, listCities} = props;

  const handleClick = (item: string) => {
    onClickCity(item);
  };
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {
            listCities?.map((item: string) =>
              (city !== item)
                ?
                <li key={item} className='locations__item'>
                  <a onClick={() => handleClick(item)} className='locations__item-link tabs__item' href='/#' >
                    <span>{item}</span>
                  </a>
                </li>
                :
                <li key={item} className='locations__item'>
                  <a className='locations__item-link active tabs__item' href='/#'>
                    <span>{item}</span>
                  </a>
                </li>,
            )
          }
        </ul>
      </section>
    </div>
  );
}

export default ListCities;
