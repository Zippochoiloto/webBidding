export class userList {
  id: number;
  fisrtName: string;
  lastName:string;
  email: string;
  Wallet: number;
  Phone: number;
  role: string;
}

export class productList {
  id: number;
  Name: string;
  Category:string;
  Price: number;
  Quantity: number;

}

export class Section {
  name: string;
  route: string;
}

export class userAdd {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }

}

export class RegisterForm{
  name: string;
  password: string;
  email: string;
  phone: number;
  walet: number;
  role: string;
}

export class HomePageRoute {
  name: string;
  route: string;
}

export class ApartmentPageRoute {
  name: string;
  route: string;
}