export class User {
  constructor() { }

  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: CompanyInfo;
  createdDate: Date;
  updatedDate: Date;
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
