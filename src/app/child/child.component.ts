import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Service } from "../service/service";

@Component({
  selector: "app-child-comp",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent {
  @Input() inputFromMain: boolean = false;
  @Output() outputEvent: EventEmitter<string> = new EventEmitter<string>();
  serviceOutput = false;
  output = false;

  constructor(private _service: Service) {
    this._service.getOutput().subscribe(output => {
      this.serviceOutput = output;
    });
  }

  public emitEvent(): void {
    this.output = !this.output;
    this.outputEvent.emit(this.output);
  }
}
