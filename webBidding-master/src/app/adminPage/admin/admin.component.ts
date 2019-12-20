import { Component, OnInit } from "@angular/core";
import { Section } from "src/app/data-container/data-model";
import { Dashboard } from "src/app/data-container/data";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  ngOnInit() {}
  dashBoard = Dashboard;
}
