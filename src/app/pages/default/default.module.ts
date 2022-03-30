import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import {DefaultRoutingModule} from "./default-routing.module";

@NgModule({
  declarations: [
    ChildComponent
  ],
  exports: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule {}
