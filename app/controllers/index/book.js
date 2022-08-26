import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
//import { later } from '@ember/runloop';
export default class IndexBookController extends Controller {
  @service('form-details') bookingdetails;
  @tracked
  model_detail = this.model;
  @tracked
  number = this.model_detail.number;
  @tracked
  fullname;
  @tracked
  email;
  @tracked
  phonenumber;
  @tracked
  tablenumber = 0;
  @service router;
  next = () => {
    this.router.transitionTo('index');
  };
  @action
  async book(event) {
    event.preventDefault();
    console.log(this.model.booked);
    if (this.model.booked) {
      this.bookingdetails.addDetails(
        (this.number = this.model.number),
        this.fullname,
        this.email,
        this.phonenumber,
        ++this.tablenumber
      );
    }
    this.number = '';
    this.fullname = '';
    this.email = '';
    this.phonenumber = '';
  }
}
