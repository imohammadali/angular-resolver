import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Meta} from "../models/meta.model";


@Component({
  selector: "app-pages",
  template: `
    <h3>pages</h3>
    {{meta | json}}
    <router-outlet></router-outlet>
    `,
})
export class PagesComponent {
  meta: Meta | null = null;
  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.data.subscribe((data:any) => {
      this.meta = data.meta;
    });
  }
}
