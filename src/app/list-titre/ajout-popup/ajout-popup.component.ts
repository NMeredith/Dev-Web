import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Titre} from "../../model/Titre";

export type PopupAction = Titre & {mode: string};

@Component({
  selector: 'app-ajout-popup',
  templateUrl: './ajout-popup.component.html',
  styleUrls: ['./ajout-popup.component.scss']
})
export class AjoutPopupComponent {

  constructor(public dialogRef: MatDialogRef<AjoutPopupComponent>) {}

  closeDialog(result: Titre & {mode?: string} | null = null) {
    this.dialogRef.close(result);
  }

  onCancel() {
    this.closeDialog();
  }

  onCreate(titre: Titre) {
    this.closeDialog({...titre, mode: 'create'});
  }

  onUpdate(titre: Titre) {
    this.closeDialog({...titre, mode: 'update'});
  }

}
