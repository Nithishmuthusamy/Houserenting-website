import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class ModalComponent extends Component {
  @service router;
  @action
  next(model) {
    model.booked = false;
    this.router.transitionTo('index');
  }
}
