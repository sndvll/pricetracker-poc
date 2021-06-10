import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select.component';
import {IconsModule} from '../../icons.module';
import {SelectOptionComponent} from './select-option.component';
import {SelectDropdownComponent} from './select-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    IconsModule
  ],
  declarations: [
    SelectComponent,
    SelectDropdownComponent,
    SelectOptionComponent
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule {}