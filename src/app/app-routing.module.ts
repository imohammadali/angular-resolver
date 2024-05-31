import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages/pages.component";
import {NgModule} from "@angular/core";
import {MetaResolverService} from "./resolvers/meta-resolver.service";

export const routes: Routes = [
  // After login
  {
    path: '',
    component: PagesComponent,
    resolve:{
      meta: MetaResolverService
    },
    children:[]
  }
//   Before login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
