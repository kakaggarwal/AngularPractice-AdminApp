export class User {
  id: number;
  name: string;
  email: string;
  username: string;
  address: Address;
  phone: string;
  website: string;
  company: CompanyInfo;
  createdDate: Date;
  updatedDate: Date;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class Address {

  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoCoords;
}

class GeoCoords {

  lat: number;
  lng: number;
}

class CompanyInfo {

  name: string;
  catchPhrase: string;
  bs: string;
}
