import { userList, Section } from "./data-Model/data-model";

export const UserList: userList[] = [
  {
    id: 1,
    name: "Nguyen Van A",
    email: "Anguyen@gmail.com",
    Wallet: 3000,
    Phone: 1111111,
    role: "User"
  },
  {
    id: 2,
    name: "Nguyen Van B",
    email: "Bnguyen@gmail.com",
    Wallet: 5000,
    Phone: 1111111,
    role: "User"
  },
  {
    id: 3,
    name: "Nguyen Van C",
    email: "Cnguyen@gmail.com",
    Wallet: 7000,
    Phone: 1111111,
    role: "User"
  },
  {
    id: 4,
    name: "Nguyen Van D",
    email: "Dnguyen@gmail.com",
    Wallet: 1000,
    Phone: 1111111,
    role: "User"
  },
  {
    id: 5,
    name: "Admin",
    email: "admin@gmail.com",
    Wallet: 2000,
    Phone: 1111111,
    role: "Admin"
  }
];

export const Dashboard: Section[] = [
  {
    name: "User List",
    route: "userList"
  },
  {
    name: "New User",
    route: "newUser"
  },
  {
    name: "Edit User",
    route: "editUser"
  }
];
