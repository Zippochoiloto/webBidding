import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const URLuser = "http://localhost:3000/userList";
const URLprod = "http://localhost:3000/prodList";
@Injectable({
  providedIn: "root"
})

export class PostsService {
  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(URLuser);
  }

  createUser(value) {
    return this.http.post(URLuser,value);
    console.log('good')
  }

  updateUser(userId: number,value) {
    return this.http.put(URLuser + "/" + userId,value);
  }

  deleteUser(userId: number) {
    return this.http.delete(URLuser + "/" + userId);
  }

  getProd() {
    return this.http.get(URLprod);
  }

  createProd(value) {
    return this.http.post(URLprod,value);
    console.log('good')
  }

  updateProd(userId: number,value) {
    return this.http.put(URLprod + "/" + userId,value);
  }

  deleteProd(userId: number) {
    return this.http.delete(URLprod + "/" + userId);
  }

  testGet() {
    return this.http.get('http://www.mocky.io/v2/5de7444a3700000f00092747');
  }
}
