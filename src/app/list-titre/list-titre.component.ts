import { Component, OnInit } from '@angular/core';
import { Titre } from 'src/app/model/Titre';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ListTitreService} from "../partage/service/list-titre.service";
import {mergeMap} from "rxjs";
import {AjoutPopupComponent} from "./ajout-popup/ajout-popup.component";

@Component({
  selector: 'app-list-titre',
  templateUrl: './list-titre.component.html',
  styleUrls: ['./list-titre.component.scss']
})
export class ListTitreComponent implements OnInit {

  musique: Titre[] = [];
  view:string = "card";
  dialogStatus: string = "inactive";
  private addDialog: MatDialogRef<AjoutPopupComponent> | any;

  constructor( private readonly listTitreService: ListTitreService, public dialog: MatDialog) {
    //Rien à faire ici
  }

  ngOnInit(): void {
    this.listTitreService.fetch().subscribe(titre => {
      this.musique = titre || [];
    });
  }

  delete(_titre: Titre) {
    this.listTitreService.delete(_titre.id!).subscribe(titre => {
      this.musique = titre;
    });
  }

  switchView() {
    if(this.view==="card"){
      this.view = "list"
    }
    else{
      this.view = "card";
    }
  }

  add(_titre: Titre) {
    this.listTitreService
      .create(_titre)
      .pipe(mergeMap(() => this.listTitreService.fetch()))
      .subscribe(titre => {
        this.musique = titre;
        this.hideDialog();
      });
  }

  update(_titre: Titre) {
    this.listTitreService
      .update(_titre)
      .pipe(mergeMap(() => this.listTitreService.fetch()))
      .subscribe(titre => {
        this.musique = titre;
        this.hideDialog();
      });
  }

   showDialog() {
    debugger;
    this.dialogStatus = 'active';


    this.addDialog.afterClosed().subscribe((_titre:any)=> {
      this.dialogStatus = 'inactive';
      if (_titre) {
        this.add(_titre);
      }
    });
  }

 hideDialog() {
    this.dialogStatus = 'inactive';
    if(this.addDialog != undefined){
      this.addDialog.close();
    }
  }







}
