import Route from '@ember/routing/route';
import { RouteQueryManager } from "ember-apollo-client";
import { users } from "./everyone/query";
import { hash } from 'rsvp';

export default Route.extend(RouteQueryManager, {
  model(){
    return hash({
      users: this.get('apollo').watchQuery({ query: users }).then((results)=>{
        return results.users;
      }),
      skills: this.modelFor('application')
    })
  }
});
