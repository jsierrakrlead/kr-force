import Route from '@ember/routing/route';
import { RouteQueryManager } from "ember-apollo-client";
import { users, skills } from "./everyone/query";
import { hash } from 'rsvp';
export default Route.extend(RouteQueryManager, {
  model(){
    return hash({
      users: this.get('apollo').watchQuery({ query: users }).then((query)=>{
        return query.users;
      }),
      skills: this.get('apollo').watchQuery({ query: skills }).then((query)=>{
        return query.skills;
      })
    })
  }
});
