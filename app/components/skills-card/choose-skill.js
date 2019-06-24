import Component from '@ember/component';
import { ComponentQueryManager } from "ember-apollo-client";
import { run } from '@ember/runloop';
import { searchSkillsByName } from "../../routes/my-skills/query";
import { A } from '@ember/array';
import { computed , observer } from '@ember/object';
import { setProperties } from '@ember/object';

export default Component.extend(ComponentQueryManager, {
  chosenLevel:null,
  chosenSkill: null,

  disabled: computed('chosenLevel', 'chosenSkill', function(){
    return !this.get('chosenSkill') || !this.get('chosenLevel');
  }),

  setQuery: observer('chosenSkill', function(){
    this.get('chosenSkill') && this.set('query', this.get('chosenSkill.name'));
  }),

  search(){
    let variables = {
      name: this.get('query')
    }
    this.get('apollo').watchQuery( { query: searchSkillsByName, variables }, "searchSkills").then((data)=>{
      this.set('chosenSkill', null);
      return this.set('queryResults', A(data));
    })
  },
  actions:{
    searchSkills(){
      if (this.get('query')) {
        run(this, 'search')
      } else {
        this.set('chosenSkill', null);
        this.set('queryResults', A());
      }
    },
    clearSearch(){
      setProperties(this, {
        chosenLevel: null,
        query: null,
        chosenLevel: null
      });
    }
  }
});
