import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  model( { user_id} ) {
    return this.get('session.currentUser')
  }
});
