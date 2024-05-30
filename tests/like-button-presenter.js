/*eslint-disable*/
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../views/templates/restaurant-content';
 
const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = FavoriteRestaurantIdb;
 
    await this._renderButton();
  },
  
  /* ...kode lainnya disembunyikan... */
};
 
export default LikeButtonPresenter;