/*eslint-disable*/
import { createitemrestaurant } from '../../templates/restaurant-content';

class FavoriteRestaurantView {
  getTemplate() {
    return `
          <div class="content">
      <h2 class="katalog_label">Your Liked Restaurant</h2>
      <input id="query" type="text" placeholder="Cari Restaurant Favorite  Anda di sini...">

        
  
        <div id="restaurants" class="restaurant-list">
        </div>
      </div>
      
      
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createitemrestaurant(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">
        Tidak ada restoran untuk ditampilkan
      </div>
    `;
  }
}
export default FavoriteRestaurantView;
