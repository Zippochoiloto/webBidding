import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const URL = "http://localhost:3000/userList";
@Injectable({
  providedIn: "root"
})

export class PostsService {
  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(URL);
  }

  createUser(value) {
    return this.http.post(URL,value);
    console.log('good')
  }

  updateUser(userId: number,value) {
    return this.http.put(URL + "/" + userId,value);
  }

  deleteUser(userId: number) {
    return this.http.delete(URL + "/" + userId);
  }
}
