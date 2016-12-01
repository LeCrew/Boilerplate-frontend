import { Component } from '@angular/core';
const STYLES = require('../../public/less/main.less');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [STYLES, require('./app.component.scss')]
})

export class AppComponent { }
