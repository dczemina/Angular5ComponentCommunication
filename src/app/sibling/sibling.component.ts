import { Component } from "@angular/core";
import { Service } from "../service/service";

@Component({
  selector: "app-sibling",
  templateUrl: "./sibling.component.html",
  styleUrls: ["./sibling.component.css"]
})
export class SiblingComponent {
  serviceOutput = false;

  constructor(private _service: Service) {
    this._service.getOutput().subscribe(output => {
      this.serviceOutput = output;
    });
  }
}
