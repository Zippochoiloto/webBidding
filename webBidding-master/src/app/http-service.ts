import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const URLuser = "http://aution-vin-2.loclx.io/GetUsers";
const URLprod = "http://aution-vin-2.loclx.io/GetProducts";
const URLbid = "http://aution-vin-2.loclx.io/GetAuctionHistories";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  login(value){
    return this.http.post("http://aution-vin-2.loclx.io/Login",value)
  }

  getPost() {
    return this.http.get(URLuser);
  }

  createUser(value) {
    console.log(value)
    return this.http.post("http://aution-vin-2.loclx.io/UserAdds", value);
  }

  updateUser( value) {
    return this.http.post("http://aution-vin-2.loclx.io/UserUpdates", value);
  }

  deleteUser(value) {
    return this.http.delete("http://aution-vin-2.loclx.io/UserDeletes",value);
  }

  getProd() {
    return this.http.get(URLprod);
  }

  getProdID(prodID: string) {
    return this.http.get(URLprod + "/" + prodID);
  }

  createProd(value) {
    return this.http.post(URLprod, value);
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
