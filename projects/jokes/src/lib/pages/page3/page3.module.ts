import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NavigationService } from '@mr-talk/mr-core';

import { Page3Component } from './page3.component';

@NgModule({
  declarations: [Page3Component],
  exports: [Page3Component],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: Page3Component }]),
  ],
})
export class Page3Module {
  constructor(private readonly navigationService: NavigationService) {
    this.navigationService.addEntry({ commands: ['jokes'], label: 'Jokes' });
  }
}
