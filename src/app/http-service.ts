import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const URLuser = "http://localhost:3000/userList";
const URLprod = "http://localhost:3000/prodList";
// const URLdetail = "http://localhost:3000/detailProduct";
const URLbid = "http://localhost:3000/auctionHistory";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(URLuser);
  }

  createUser(value) {
    return this.http.post(URLuser, value);
    console.log("good");
  }

  updateUser(userId: number, value) {
    return this.http.put(URLuser + "/" + userId, value);
  }

  deleteUser(userId: number) {
    return this.http.delete(URLuser + "/" + userId);
  }

  getProd() {
    return this.http.get(URLprod);
  }

  getProdID(prodID: string) {
    return this.http.get(URLprod + "/" + prodID);
  }

  createProd(value) {
    return this.http.post(URLprod, value);
    console.log("good");
  }

  updateProd(userId: number, value) {
    return this.http.put(URLprod + "/" + userId, value);
  }

  deleteProd(userId: number) {
    return this.http.delete(URLprod + "/" + userId);
  }

  getBid() {
    return this.http.get(URLbid);
  }

  getprodBid(id) {
    return this.http.get(URLbid + "/" + id);
  }

  updateBid(Id: string, value) {
    return this.http.put(URLbid + "/" + Id, value);
  }
}
