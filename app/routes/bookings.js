import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class BookingsRoute extends Route {
  @service('form-details') bookingdetails;
  model() {
    return this.bookingdetails.detailsOfBooking;
  }
}
