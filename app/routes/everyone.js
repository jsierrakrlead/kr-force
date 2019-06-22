import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { RouteQueryManager } from "ember-apollo-client";
import query from "../gql/queries/user-skill-levels.graphql";

export default Route.extend(RouteQueryManager, {
  model(){
    console.log('dfs;ksdaf', query)
    return this.get('apollo').watchQuery({ query });
  }
});
