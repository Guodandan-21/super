// import Route from '@ember/routing/route';

// export default Route.extend({
// });

import Route from '@ember/routing/route';

export default Route.extend({
  redirect() {
    this.transitionTo('rentals');
  }
});
