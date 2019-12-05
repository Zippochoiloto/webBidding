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
  productName: string;
  description:string;
  productImage: string;
  Category: string;
  pricestart: number;
  startTime: Date;
  endTime: Date;
  status: boolean;
  
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