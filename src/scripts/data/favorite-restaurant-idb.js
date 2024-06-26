/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIGURASION from '../globals/configurasion';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIGURASION;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  // eslint-disable-next-line no-empty-function
  async searchRestaurants(query) {
    const restaurants = await (await dbPromise).getAll(OBJECT_STORE_NAME);
    return restaurants.filter((restaurant) => {
      const loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
      const jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');
      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
      return jammedRestaurantName.indexOf(jammedQuery) !== -1;
    });
  },
};
export default FavoriteRestaurantIdb;
