import { Component } from "@angular/core";
import { Service } from "../service/service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent {
  inputToChild = false;
  outputFromChild = false;
  serviceOutput = false;

  constructor(private _service: Service) {
    this._service.getOutput().subscribe(output => {
      this.serviceOutput = output;
    });
  }

  public changeInputToChild(): void {
    this.inputToChild = !this.inputToChild;
  }

  public handleOutput(event: any): void {
    this.outputFromChild = event;
  }
}
