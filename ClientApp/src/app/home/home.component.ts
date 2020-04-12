import { Component, ViewChild, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public leftVisible = false;
  public rightVisible = false;
  images = ['images/bane.jpg', 'images/maul.png', 'images/asajj.jpg'];
  titles = ['Darth Bane\'s Armor', 'Darth Maul\'s Lightsaber', 'Asajj Ventress\' Lightsaber'];
  baneDesc = 'Orbalisk armor was a suit comprised of orbalisks, near-invincible parasites native to Dxun, that had a very hard shell, and were able to deflect even lightsabers. The parasitic creatures clung to the body using their thousands of tiny teeth, and fed off the dark side of the Force in the person. The only people known to use orbalisk armor were Darth Bane and Freedon Nadd. Some of the orbalisks in Bane\'s armor were killed in a duel with five Jedi, and it was his own Force lightning that dealt the blow, after it was redirected on him by a dying Jedi master. Bane survived due to the healing techniques of Caleb, who had struck a deal with Bane\'s apprentice Darth Zannah.';
  maulDesc = 'The Dark Lord of the Sith Darth Maul wielded a red double-bladed lightsaber. After it was cut in half in 32 BBY, it became a single-bladed lightsaber. When it was double-bladed, Maul used the saberstaff on countless missions for his master, Darth Sidious. With it he embarked on missions to kill Jedi and to eliminate enemies. Maul used the saberstaff to eliminate Jedi Anoon Bondara, Siolo Ur Manka, Qui-Gon Jinn and Darsha Assant. He used the lightsaber in his mission to cripple the Black Sun criminal syndicate.';
  ventressDesc = 'The paired lightsabers used by Komari Vosa and Asajj Ventress emitted a red blade when activated. The activation stud on these lightsabers was concealed.[4] As paired lightsabers, the two weapons could be joined together at the hilt with fibercord to function as a saberstaff, but due to the curved form of the handle, it was somewhat more difficult to wield, especially with the precision demanded by Makashi.';
  descriptions = [this.baneDesc, this.maulDesc, this.ventressDesc];

  public prod1: Product = { imageUrl: 'urlOne', title: 'title 1', desc: 'desc 1'};
  public prod2 = {url: 'url', title: 'test', desc: 'description'};

  @ViewChild('imgCarousel', {static: false}) imgCarousel: any;

  dataEvent: string;
  imageIndex: number;

  ngOnInit(): void {
    this.imageIndex = 0;
  }

  onSlide(event) {
    this.dataEvent = JSON.stringify(event);
    this.imageIndex = parseInt(event.current.replace('slideId_', ''), 10);
  }


  prev() {
    this.imgCarousel.prev();
  }

  next() {
    this.imgCarousel.next();
  }
}
