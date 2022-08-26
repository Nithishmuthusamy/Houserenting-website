import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexDetailsRoute extends Route {
  @service store;
  model(params) {
    let userid = params.details_id;
    //later(this.finddata, 2000);
    return this.store.findRecord('house', userid);
  }
}
