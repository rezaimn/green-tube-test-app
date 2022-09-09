import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotifComponent} from "./components/notif/notif.component";


@NgModule({
  declarations: [
    NotifComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NotifComponent]
})
export class SharedModule {
}
