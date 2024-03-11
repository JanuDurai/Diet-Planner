import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  display = "none";
openModal() {
    this.display = "block";
  }
  closeModal() {
    this.display = "none";
  }

 

}
