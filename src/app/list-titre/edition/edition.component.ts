import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListTitreService} from "../../partage/service/list-titre.service";
import {Titre} from "../../model/Titre";

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  titre: Titre;

  /**
   * Component constructor
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly listTitreService: ListTitreService
  ) {
    this.titre = {};
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.route.data.subscribe(( titre: any) => (this.titre = titre.titre));
  }

  submit(titre: any) {
    this.listTitreService.update(titre).subscribe(() => {
      this.router.navigate(['/listTitre']).then(r => null);
    });
  }

  cancel() {
    this.router.navigate(['/listTitre']).then(r => null);
  }

}
