import { Component, OnInit } from '@angular/core';
import { JokeFacade } from '@mr-talk/jokes-store';
@Component({
  selector: 'jo-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss'],
})
export class RandomJokeComponent implements OnInit {
  constructor(public readonly facade: JokeFacade) {}

  public ngOnInit(): void {
    this.facade.loadRandomJoke();
  }
}
