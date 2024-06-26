/*eslint-disable*/

// import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
// import FavoriteRestaurantView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-view';

// describe('Searching restaurants', () => {
//   let presenter;
//   let favoriteRestaurants;
//   let view;

//   const searchRestaurants = (query) => {
//     const queryElement = document.getElementById('query');
//     queryElement.value = query;

//     queryElement.dispatchEvent(new Event('change'));
//   };

//   const setRestaurantSearchContainer = () => {
//     view = new FavoriteRestaurantView();
//     document.body.innerHTML = view.getTemplate();
//   };

//   const constructPresenter = () => {
//     favoriteRestaurants = {
//       getAllRestaurants: jest.fn(),
//       searchRestaurants: jest.fn(),
//     };

//     presenter = new FavoriteRestaurantSearchPresenter({
//       favoriteRestaurants,
//       view,
//     });
//   };

//   beforeEach(() => {
//     setRestaurantSearchContainer();
//     constructPresenter();
//   });

//   describe('When query is not empty', () => {
//     it('should be able to capture the query typed by the user', () => {
//       favoriteRestaurants.searchRestaurants.mockImplementation(() => []);

//       searchRestaurants('film a');

//       expect(presenter.latestQuery).toEqual('film a');
//     });

//     it('should ask the model to search for liked restaurants', () => {
//       favoriteRestaurants.searchRestaurants.mockImplementation(() => []);

//       searchRestaurants('film a');

//       expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('film a');
//     });

//     it('should show the restaurants found by Favorite Restaurants', (done) => {
//       document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
//         expect(document.querySelectorAll('.restaurant-item').length).toEqual(3);

//         done();
//       });

//       favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
//         if (query === 'film a') {
//           return [
//             { id: 111, title: 'film abc' },
//             { id: 222, title: 'ada juga film abcde' },
//             { id: 333, title: 'ini juga boleh film a' },
//           ];
//         }

//         return [];
//       });

//       searchRestaurants('film a');
//     });

//     it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
//       document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
//         const restaurantTitles = document.querySelectorAll('.restaurant__title');

//         expect(restaurantTitles.item(0).textContent).toEqual('film abc');
//         expect(restaurantTitles.item(1).textContent).toEqual('ada juga film abcde');
//         expect(restaurantTitles.item(2).textContent).toEqual('ini juga boleh film a');

//         done();
//       });

//       favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
//         if (query === 'film a') {
//           return [
//             { id: 'fnfn8mytkpmkfw1e867', title: 'Melting Pot' },
//             { id: 'fnfn8mytkpmkfw1e867', title: 'Makan mudah' },
//             { id: 333, title: 'ini juga boleh film a' },
//           ];
//         }

//         return [];
//       });

//       searchRestaurants('film a');
//     });

//     it('should show - when the restaurant returned does not contain a title', (done) => {
//       document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
//         const restaurantTitles = document.querySelectorAll('.restaurant__title');
//         expect(restaurantTitles.item(0).textContent).toEqual('-');

//         done();
//       });

//       favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
//         if (query === 'film a') {
//           return [{ id: 'rqdv5juczeskfw1e867' }];
//         }

//         return [];
//       });

//       searchRestaurants('film a');
//     });
//   });

//   describe('When query is empty', () => {
//     it('should capture the query as empty', () => {
//       favoriteRestaurants.getAllRestaurants.mockImplementation(() => []);

//       searchRestaurants(' ');
//       expect(presenter.latestQuery.length).toEqual(0);

//       searchRestaurants('    ');
//       expect(presenter.latestQuery.length).toEqual(0);

//       searchRestaurants('');
//       expect(presenter.latestQuery.length).toEqual(0);

//       searchRestaurants('\t');
//       expect(presenter.latestQuery.length).toEqual(0);
//     });

//     it('should show all favorite restaurants', () => {
//       favoriteRestaurants.getAllRestaurants.mockImplementation(() => []);

//       searchRestaurants('    ');

//       expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
//     });
//   });

//   describe('When no favorite restaurants could be found', () => {
//     it('should show the empty message', (done) => {
//       document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
//         expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);

//         done();
//       });

//       favoriteRestaurants.searchRestaurants.mockImplementation((query) => []);

//       searchRestaurants('film a');
//     });

//     it('should not show any restaurant', (done) => {
//       document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
//         expect(document.querySelectorAll('.restaurant-item').length).toEqual(0);

//         done();
//       });

//       favoriteRestaurants.searchRestaurants.mockImplementation((query) => []);

//       searchRestaurants('film a');
//     });
//   });
// });
