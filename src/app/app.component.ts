import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `<h1>Hello World {{address}}</h1>
 <app-hello></app-hello>`,
})
export class AppComponent {
  title: string = 'angular-demo';
  address: string = 'Maharatsra';
}
