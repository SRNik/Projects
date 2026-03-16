import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTab = 'recipe'; //initated active tab

  // onNavigate(tabnav: string) {
  //   this.currentTab = tabnav; //saving data from the html/template
  // }
}

