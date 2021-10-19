import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/jokes', pathMatch: 'full' },
  {
    path: 'jokes',
    loadChildren: () => import('@mr-talk/jokes').then((m) => m.Page3Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
