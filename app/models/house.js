import Model, { attr } from '@ember-data/model';

export default class HouseModel extends Model {
  @attr src;
  @attr number;
  @attr place;
  @attr rating;
  @attr rent;
  @attr noofguest;
  @attr description;
  @attr booked;
}
