import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class IndexRoute extends Route {
  @service store;
  @tracked
  number = 1;
  model() {
    console.log('index');
    if (this.number === 1) {
      this.number++;
      let name = this.store.findAll('house');
      return name;
    }
    return this.store.findAll('house');
  }
  setupController(controller, model) {
    console.log("setupcontroller invoked");
  }
}
