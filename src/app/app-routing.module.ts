import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages/pages.component";
import {NgModule} from "@angular/core";
import {MetaResolverService} from "./resolvers/meta-resolver.service";

export const routes: Routes = [
  // After login : this resolve guaranty that this routes load after loading meta service load
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
