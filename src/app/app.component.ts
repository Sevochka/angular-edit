import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// simple field input
export class AppComponent {
  fieldString = 'Edit Me';
  isVisible = true;

  myMouseClicked(){
    this.isVisible = !this.isVisible;
  }
}
