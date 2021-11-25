import {loadCurrentOffers} from './action';
import {ThunkActionResult} from '../types/action';
import {APIRoute} from '../const';
import {requireAuthorization} from './action';
import {AuthorizationStatus} from '../const';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<any[]>(APIRoute.LoadOffers);
    /* eslint-disable no-console */
    console.log('data',data);
    /* eslint-enable no-console */
    dispatch(loadCurrentOffers(data));
  };
export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      /* eslint-disable no-console */
      console.log('error');
      /* eslint-enable no-console */
    }
  };
