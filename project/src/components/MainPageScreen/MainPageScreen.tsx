import {Link} from 'react-router-dom';
import ListCards from '../ListCards/ListCards';
import {connect, ConnectedProps} from 'react-redux';
import ListCities from '../ListCities/ListCities';
import {Dispatch, useEffect} from 'react';
import {State} from '../../types/state';
import {Actions} from '../../types/action';
import {chooseCity, filterOffersCity, getCurrentCityLocation, getListCities} from '../../store/action';
import Map from '../Map/Map';
import {Cities, Offer, Offers, Point} from '../../types/offer';


const mapStateToProps = ({offers, city, listCities, points, currentCityLocation, currentOffers}: State) => ({
  offers,
  city,
  listCities,
  points,
  currentCityLocation,
  currentOffers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onClickCity(city: Cities) {
    dispatch(chooseCity(city));
  },
  onGetListCities(uniqArrCities: string[]) {
    dispatch(getListCities(uniqArrCities));
  },
  onFilterCity( offers: Offers) {
    dispatch(filterOffersCity(offers));
  },
  onGetLocationCity(point?: Point) {
    dispatch(getCurrentCityLocation(point));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainPageScreen(props: PropsFromRedux): JSX.Element {
  const {offers, onFilterCity, city, onClickCity, onGetLocationCity, onGetListCities, currentCityLocation, listCities, currentOffers} = props;
  useEffect(() => {
    const filterOffers: Offers = offers.filter((obj: Offer) => obj.city.name === city);
    onFilterCity(filterOffers);
  }, [city, offers, onFilterCity]);
  useEffect(() => {
    const cityLocation = currentOffers.find((item: Offer) =>  item.city.name === city);
    onGetLocationCity(cityLocation?.city.location);
    const newArrCities = offers.map((item: Offer) => (item.city.name));
    const uniqArrCities = newArrCities.filter((value: string, index: number) => newArrCities.indexOf(value) === index );
    onGetListCities(uniqArrCities);
  }, [city, offers, currentOffers, onGetListCities, onGetLocationCity, onFilterCity]); //?? getData ???? ????????????????????, ?????????????? ?????????? ????????????????????????, ?? ?????????? ?????????????????? - ???????????????????????????? ??????

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns='http://www.w3.org/2000/svg'>
          <symbol id='icon-arrow-select' viewBox='0 0 7 4'>
            <path fillRule='evenodd' clipRule='evenodd' d='M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z'></path>
          </symbol>
          <symbol id='icon-bookmark' viewBox='0 0 17 18'>
            <path d='M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z'></path>
          </symbol>
          <symbol id='icon-star' viewBox='0 0 13 12'>
            <path fillRule='evenodd' clipRule='evenodd' d='M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z'></path>
          </symbol>
        </svg>
      </div>
      <div className='page page--gray page--main'>
        <header className='header'>
          <div className='container'>
            <div className='header__wrapper'>
              <div className='header__left'>
                <Link to={'/'} className='header__logo-link header__logo-link--active'>
                  <svg width="81" height="41" viewBox="0 0 81 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.62.914a1.166 1.166 0 0 1 2.278.504L15.33 40.086a1.166 1.166 0 1 1-2.277-.504L21.621.914z" fill="#4481C3"/><path fillRule="evenodd" clipRule="evenodd" d="M9.343 16.383c.148.328.191.629.129.902H12.8c.172-1.344-.125-2.42-.89-3.228-.766-.809-1.938-1.213-3.516-1.213-1.094 0-2.088.25-2.983.75-.894.5-1.67 1.16-2.326 1.98-.765.961-1.398 2.164-1.898 3.61-.282.812-.563 1.867-.844 3.164-.469 2.21-.457 4.015.035 5.414.633 1.789 2.02 2.683 4.16 2.683 1.992 0 3.59-.605 4.793-1.816 1.203-1.211 1.973-2.61 2.309-4.195.344-1.594.142-2.903-.604-3.926-.746-1.024-1.873-1.535-3.38-1.535a5.46 5.46 0 0 0-1.952.34 4.967 4.967 0 0 0-1.67 1.078c.375-1.313.758-2.305 1.149-2.977.719-1.219 1.62-1.828 2.707-1.828.726 0 1.21.266 1.453.797zM7.099 26.889c-.543.558-1.186.838-1.928.838-.758 0-1.322-.29-1.693-.868-.371-.578-.46-1.324-.264-2.238.242-1.133.746-1.953 1.512-2.46a2.835 2.835 0 0 1 1.617-.517c.703 0 1.24.264 1.611.792.371.527.451 1.287.24 2.279-.187.89-.552 1.615-1.095 2.174zM36.8 17.736c-.032-1.472-.436-2.52-1.212-3.144-.776-.624-1.9-.936-3.372-.936-1.04 0-1.984.208-2.832.624a7.244 7.244 0 0 0-2.22 1.68 9.947 9.947 0 0 0-1.596 2.436c-.432.92-.752 1.892-.96 2.916-.208.96-.312 1.904-.312 2.832 0 .928.156 1.756.468 2.484a3.908 3.908 0 0 0 1.5 1.764c.688.448 1.624.672 2.808.672a6.03 6.03 0 0 0 2.088-.36 6.783 6.783 0 0 0 1.812-.996 7.718 7.718 0 0 0 1.476-1.5 9.64 9.64 0 0 0 1.104-1.896h1.704c-.368.832-.816 1.62-1.344 2.364a9.384 9.384 0 0 1-1.86 1.956 8.555 8.555 0 0 1-2.46 1.332c-.928.328-1.968.492-3.12.492-1.328 0-2.412-.244-3.252-.732a4.753 4.753 0 0 1-1.896-1.98c-.424-.832-.656-1.796-.696-2.892-.04-1.096.076-2.26.348-3.492.352-1.648.852-3.048 1.5-4.2.648-1.152 1.408-2.092 2.28-2.82a8.354 8.354 0 0 1 2.88-1.584 10.984 10.984 0 0 1 3.3-.492c1.776 0 3.168.464 4.176 1.392 1.008.928 1.464 2.288 1.368 4.08H36.8zM39.248 30l2.64-12.432h1.44L40.688 30h-1.44zm3.6-17.28l-.456 2.136h1.584l.456-2.136h-1.584zm5.88 17.328c-.176.032-.42.088-.732.168-.312.08-.644.12-.996.12-.72 0-1.228-.18-1.524-.54-.296-.36-.348-1.004-.156-1.932l1.92-9.096h-1.752l.264-1.2h1.752l.744-3.456h1.44l-.744 3.456h2.328l-.264 1.2H48.68l-1.8 8.52c-.064.304-.112.568-.144.792-.032.224-.02.408.036.552.056.144.16.248.312.312s.38.096.684.096c.192 0 .388-.016.588-.048.2-.032.404-.072.612-.12l-.24 1.176zm5.16-12.48L51.248 30h1.44l2.64-12.432h-1.44zm.504-2.712l.456-2.136h1.584l-.456 2.136h-1.584zm12.588 6.348c.056.536.02 1.108-.108 1.716H58.76a7.98 7.98 0 0 1 .768-1.68c.32-.528.696-.992 1.128-1.392.432-.4.916-.72 1.452-.96a4.267 4.267 0 0 1 1.764-.36c.64 0 1.184.116 1.632.348.448.232.792.544 1.032.936s.388.856.444 1.392zm-8.484 2.916a6.587 6.587 0 0 0-.144 1.908c.048.6.2 1.12.456 1.56.256.44.62.792 1.092 1.056.472.264 1.052.396 1.74.396.944 0 1.804-.248 2.58-.744s1.372-1.2 1.788-2.112h1.608a10.43 10.43 0 0 1-1.044 1.644 6.838 6.838 0 0 1-1.356 1.32 6.06 6.06 0 0 1-1.728.876c-.64.208-1.352.312-2.136.312-.992 0-1.812-.168-2.46-.504-.648-.336-1.144-.796-1.488-1.38-.344-.584-.54-1.272-.588-2.064-.048-.792.024-1.644.216-2.556a9.487 9.487 0 0 1 .936-2.568c.432-.8.956-1.5 1.572-2.1a7.09 7.09 0 0 1 2.088-1.416 6.118 6.118 0 0 1 2.508-.516c1.712 0 2.932.588 3.66 1.764.728 1.176.844 2.884.348 5.124h-9.648zm13.62 4.26c-.488-.44-.74-1.196-.756-2.268h-1.464a4.237 4.237 0 0 0 .036 1.656c.12.512.34.96.66 1.344.32.384.74.684 1.26.9.52.216 1.148.324 1.884.324s1.428-.076 2.076-.228a6.298 6.298 0 0 0 1.752-.684c.52-.304.952-.684 1.296-1.14.344-.456.58-.98.708-1.572.128-.592.12-1.088-.024-1.488a2.257 2.257 0 0 0-.696-.996 3.83 3.83 0 0 0-1.14-.636c-.44-.16-.896-.3-1.368-.42a111.9 111.9 0 0 1-1.38-.36 5.73 5.73 0 0 1-1.176-.444 1.984 1.984 0 0 1-.768-.672c-.176-.272-.216-.616-.12-1.032.128-.64.476-1.156 1.044-1.548.568-.392 1.308-.588 2.22-.588.896 0 1.6.196 2.112.588.512.392.736 1.068.672 2.028h1.464c.112-1.408-.184-2.412-.888-3.012-.704-.6-1.728-.9-3.072-.9-1.392 0-2.536.332-3.432.996-.896.664-1.456 1.516-1.68 2.556-.176.816-.116 1.448.18 1.896.296.448.716.792 1.26 1.032s1.144.42 1.8.54c.656.12 1.264.264 1.824.432.56.168 1.004.4 1.332.696.328.296.428.748.3 1.356a2.423 2.423 0 0 1-.372.864 2.97 2.97 0 0 1-.72.732 3.61 3.61 0 0 1-1.056.516 4.692 4.692 0 0 1-1.404.192c-1.088 0-1.876-.22-2.364-.66z" fill="#383838"/></svg>
                </Link>
              </div>
              <nav className='header__nav'>
                <ul className='header__nav-list'>
                  <li className='header__nav-item user'>
                    <Link className='header__nav-link header__nav-link--profile' to={'/favorites'}>
                      <div className='header__avatar-wrapper user__avatar-wrapper'>
                      </div>
                      <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                    </Link>
                  </li>
                  <li className='header__nav-item'>
                    <a className='header__nav-link' href='/#'>
                      <span className='header__signout'>Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <ListCities city={city} onClickCity={onClickCity} listCities={listCities}/>
        <main className='page__main page__main--index'>
          <h1 className='visually-hidden'>Cities</h1>

          <div className='cities'>
            <div className='cities__places-container container'>

              <ListCards items={currentOffers} currentCity={city}/>
              <div className='cities__right-section'>
                <div className="cities__map">
                  {
                    currentCityLocation && <Map currentCityLocation={currentCityLocation} offers={offers}/>
                  }
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default connector(MainPageScreen);
