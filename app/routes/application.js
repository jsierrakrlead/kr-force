import Route from "@ember/routing/route";
import { RouteQueryManager } from "ember-apollo-client";
import { skills } from "./application/query";
import { inject as service } from "@ember/service";

export default Route.extend(RouteQueryManager, {
  model() {
    console.log("hello");
    return this.get("apollo").watchQuery({ query: skills }, "skills");
  },
  afterModel() {
    this.transitionTo("everyone");
  },
});
