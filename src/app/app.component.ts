import { Component } from "@angular/core";
import { Service } from "./service/service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular 5 Component Communication";

  constructor(private _service: Service) {}

  sendOutput(): void {
    this._service.sendOutput();
  }
}
