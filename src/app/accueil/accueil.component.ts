import { Component } from '@angular/core';
import { Titre } from 'src/app/model/Titre';
import { ListTitreService } from '../partage/service/list-titre.service';
@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  titre: Titre = {};

  constructor(private readonly listTitreService: ListTitreService) {
    this.random();
  }

  /**
   * Returns random title
   */
  random() {
    this.listTitreService.fetchRandom().subscribe((titre) => {
      this.titre = titre;
    });
  }

  delete(titr: Titre) {
    this.listTitreService.delete(titr.id!).subscribe(() => {
      this.random();
    });
  }
}
