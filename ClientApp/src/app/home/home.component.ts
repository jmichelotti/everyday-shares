import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public leftVisible = false;
  public rightVisible = false;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
