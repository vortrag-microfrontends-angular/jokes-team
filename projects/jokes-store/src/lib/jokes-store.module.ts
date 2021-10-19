import { NgModule } from '@angular/core';
import { JokeModule } from './store/joke/joke.module';

@NgModule({
  imports: [JokeModule],
})
export class JokesStoreModule {}
