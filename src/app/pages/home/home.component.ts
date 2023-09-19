import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css'],
  styles: ['h1 { font-weight: normal; color : red !important; }']
})
export class HomeComponent  {
    ngOnInit() {
     AOS.init();
   }
}