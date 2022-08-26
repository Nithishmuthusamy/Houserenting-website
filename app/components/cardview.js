import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class CardviewComponent extends Component {
  @service store;
  @service router;

  @action
  delete(detail) {
    try {
      this.store.unloadRecord(detail);
      this.router.transitionTo('index');
    } catch {
      console.log('Error');
    }
  }
  @action
  detailbutton(detail) {
    this.router.transitionTo('index.details', detail);
  }
  @action
  bookbutton(id) {
    this.router.transitionTo('index.book', id);
  }
}
