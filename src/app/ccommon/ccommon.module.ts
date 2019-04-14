import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportsModule } from './../material-imports/material-imports.module'

import {NewslettersComponent } from './newsletters/newsletters.component'

@NgModule({
  declarations: [
    NewslettersComponent
  ],
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  exports: [
    NewslettersComponent
  ]
})
export class CcommonModule { }
