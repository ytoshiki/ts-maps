import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseInt(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `The company name is <h2>${this.companyName}</h2> with a catch phrase ${this.catchPhrase}`;
  }
}
