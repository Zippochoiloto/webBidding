import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PipeService {
  constructor() {}
  pipeProd(value: any) {
    value.map(object => {
      if (object.Category == 1) {
        object.Category = "Nhà";
      }
      if (object.Category == 2) {
        object.Category = "Ô tô";
      }
      if (object.Category == 3) {
        object.Category = "Xe máy";
      }
      if (object.Sold == true){
        object.Sold = "Avaiable"
      }
      if (object.Sold == false){
        object.Sold = "Sold"
      }
    });
  }
}
