import Route from '@ember/routing/route';
import { RouteQueryManager } from "ember-apollo-client";
import { users, skills } from "./everyone/query";
import { hash } from 'rsvp';
export default Route.extend(RouteQueryManager, {
  model(){
    return hash({
      users: this.get('apollo').watchQuery({ query: users }).then((results)=>{
        console.log('skfklsdf', results)
        return results.users;
      }),
      skills: this.get('apollo').watchQuery({ query: skills }).then((results)=>{
        return results.skills;
      })
    })
  }
});
