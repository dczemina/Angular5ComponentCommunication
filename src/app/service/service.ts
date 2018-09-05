import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class Service {
  private _output: Subject<boolean> = new Subject<boolean>();

  output = false;

  public sendOutput(): void {
    this.output = !this.output;
    this._output.next(this.output);
  }

  public getOutput(): Observable<boolean> {
    return this._output.asObservable();
  }
}
