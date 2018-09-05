import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { SiblingComponent } from "./sibling/sibling.component";
import { ChildComponent } from "./child/child.component";
import { Service } from "./service/service";

@NgModule({
  declarations: [AppComponent, MainComponent, SiblingComponent, ChildComponent],
  imports: [BrowserModule, FormsModule],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule {}
