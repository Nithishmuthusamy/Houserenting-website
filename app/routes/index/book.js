import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class IndexBookRoute extends Route {
  @service store;
  @tracked
  number = '6';
  model(params) {
    let userid = params.book_id;
    return this.store.findRecord('house', userid);
  }
}
