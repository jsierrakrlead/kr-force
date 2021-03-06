import Route from '@ember/routing/route';
import { RouteQueryManager } from "ember-apollo-client";
import { user , levels } from "./my-skills/query";
import { hash } from 'rsvp';


export default Route.extend(RouteQueryManager, {
  model( { id } ) {
    return hash({
      user: this.get('apollo').watchQuery( { query: user , variables: { id } }, "user"),
      levels: this.get('apollo').watchQuery( { query: levels }, "levels"),
      skills: this.modelFor('application')
    })
  }
});
