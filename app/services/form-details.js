import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class FormDetailsService extends Service {
  @tracked
  id = 4;
  @tracked
  number = 10;
  @tracked
  detailsOfBooking = [];
  addDetails = (houseNumber, fullName, email, phoneNumber, tableNumber) => {
    this.detailsOfBooking = [
      ...this.detailsOfBooking,
      {
        houseNumber: houseNumber,
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        tableNumber: tableNumber,
      },
    ];
  };
}
