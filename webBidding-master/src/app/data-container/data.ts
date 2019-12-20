import { userList, Section, HomePageRoute, ApartmentPageRoute, productList } from "./data-model";

export const UserList: userList[] = [
  
];

// export const ProductList: productList[] = [
//   {
//   id: 1;
//   productName: "Ô tô Vinfast";
//   description:"string";
//   productImage: string;
//   Category: string;
//   pricestart: number;
//   startTime: Date;
//   endTime: Date;
//   status: boolean;
//   },
//   {
//     id: 2,
//   Name: "Xe Máy Vinfast",
//   Category:"Motobike",
//   Price: 20000,
//   Quantity: 2,
//   },
//   {
//     id: 3,
//   Name: "Nhà VinHome",
//   Category:"Apartment",
//   Price: 50000,
//   Quantity: 1,
//   }];

export const Dashboard: Section[] = [
  {
    name: "User List",
    route: "userList"
  },
  {
    name: "Product List",
    route: "productList"
  }
];

export const homePage: HomePageRoute[] = [
  { name: "Home", route: "/home" },
  { name: "Apartment", route: "/home/apartment" },
  { name: "Car", route: "/home/car" },
  { name: "Motorbike", route: "/home/motorbike" },
  { name: "User Profile", route: "userProfile" }
];

export const apartmentPageRoute: ApartmentPageRoute[] = [
  {name:"Times City", route: "/home/apartment/Times City"},
  {name:"Royal City", route: "/home/apartment/Royal City"},
  {name:"River Side", route: "/home/apartment/Royal City"},
]
