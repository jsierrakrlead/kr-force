import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
export default Component.extend({
  chosenLevel:null,
  actions:{
    searchSkills(val){
      console.log('serarching', val)
    }
  }
});
