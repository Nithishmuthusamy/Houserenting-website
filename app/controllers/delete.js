import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class DeleteController extends Controller {
  @service('form-details') formDetail;
  @tracked
  id;
  @action
  delete(event) {
    event.preventDefault();
    this.formDetail.deleteDetails(this.id);
  }
}
