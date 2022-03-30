import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbIconModule,
  NbActionsModule,
  NbUserModule,
  NbLayoutModule,
  NbContextMenuModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbDialogModule,
  NbToastrModule,
  NbListModule,
  NbFormFieldModule,
  NbSelectModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

const components = [
  HeaderComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    NbIconModule,
    NbActionsModule,
    NbUserModule,
    NbLayoutModule,
    NbContextMenuModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    FormsModule,
    NbDialogModule,
    NbToastrModule.forRoot(),
    NbListModule,
    NbFormFieldModule,
    NbSelectModule,
    ],
  exports: [...components],
  providers: [],
})

export class ComponentsModule {}
