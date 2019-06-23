import Component from '@ember/component';
import { ComponentQueryManager } from "ember-apollo-client";
import { run } from '@ember/runloop';
import { searchSkillsByName } from "../../routes/my-skills/query";
import { A } from '@ember/array';

export default Component.extend(ComponentQueryManager, {
  chosenLevel:null,
  search(){
    let variables = {
      name: this.get('query')
    }
    this.get('apollo').watchQuery( { query: searchSkillsByName, variables }, "searchSkills").then((data)=>{
      console.log('settinggg', data)
      return this.set('queryResults', A(data));
    })
  },
  actions:{
    searchSkills(){
      if (this.get('query')) {
        run(this, 'search')
      } else {
        this.set('queryResults', A());
      }
    }
  }
});
