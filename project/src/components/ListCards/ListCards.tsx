import Card from '../Card/card';
import {Offer} from '../../types/offer';

type Props = {
  items: Offer[],
  currentCity: string,
}

function ListCards(props: Props): JSX.Element {
  const {items, currentCity} = props;

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>{items.length ?? 0} places to stay in {currentCity}</b>
      <form className='places__sorting' action='#' method='get'>
        <span className='places__sorting-caption'>Sort by</span>
        <span className='places__sorting-type' tabIndex={0}>Popular<svg className='places__sorting-arrow' width='7' height='4'><use xlinkHref='#icon-arrow-select'></use></svg></span>
        <ul className='places__options places__options--custom places__options--opened'>
          <li className='places__option places__option--active' tabIndex={0}>Popular</li>
          <li className='places__option' tabIndex={0}>Price: low to high</li>
          <li className='places__option' tabIndex={0}>Price: high to low</li>
          <li className='places__option' tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className='cities__places-list places__list tabs__content'>
        {
          items.map((item: Offer) => (
            <Card key={`product-card-${item.id}`} {...item} />
          ))
        }
      </div>
    </section>
  );
}

export default ListCards;
