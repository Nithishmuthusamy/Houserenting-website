import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class IndexDetailsController extends Controller {
  @service router;
  @service store;
  @action
  submit() {
    let element = document.getElementsByClassName('progress-bar')[0];
    element.style.width = '100%';
  }
  @action
  bookbutton(detail) {
    this.router.transitionTo('index.book', detail);
  }
  @action
  deletebutton(detail) {
    this.store.unloadRecord(detail);
    this.router.transitionTo('index');
  }
}
