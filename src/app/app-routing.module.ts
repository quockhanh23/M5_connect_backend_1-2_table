import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'book/list' },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then(module => module.BookModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then(module => module.PersonModule)
  },

  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then(module => module.TestModule)
  },
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
