import { Component, OnInit } from '@angular/core';

import { JokeFacade } from '@mr-talk/jokes-store';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component implements OnInit {
  constructor(public readonly facade: JokeFacade) {}

  public ngOnInit(): void {
    this.facade.loadJokes(5);
  }
}
