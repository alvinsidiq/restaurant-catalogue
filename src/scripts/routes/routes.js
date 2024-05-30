/* eslint-disable import/extensions */
import DaftarRestaurant from '../views/pages/list-restaurant';
import DetailResto from '../views/pages/detail';
// eslint-disable-next-line import/no-unresolved
import Like from '../views/pages/like';

const routes = {
  '/': DaftarRestaurant,
  '/list-restaurant': DaftarRestaurant,
  '/like': Like,
  '/detail/:id': DetailResto,

};

export default routes;
