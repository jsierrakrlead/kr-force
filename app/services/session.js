import Service from '@ember/service';
import EmberObject from '@ember/object';
export default Service.extend({
  currentUser: EmberObject.create({
    email: 'jsierra@kaufmanrossin.com',
    name: 'Juan Sierra' 
  })
});
