import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Titre} from "../../model/Titre";

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  form: FormGroup;
  @Input() model: Titre;
  @ViewChild("fileInput") fileInput!: ElementRef;

  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = FormulaireComponent.buildForm();
    this.model = {
      style: []
    };
  }

  ngOnInit() {
    debugger;
    this.form.patchValue({
      id: this.model.id,
      title: this.model.title,
      description: this.model.description,
      album: this.model.album,
      style: this.model.style || [],
      photo: this.model.artist,
      duration: this.model.duration,
      picture: this.model.picture,
    });
  }

  cancel() {
    this.cancelEvent$.emit();
  }

  submit(titre: Titre) { //Formulaire
    titre.picture = this.model.picture;
    this.submitEvent$.emit(titre);
  }


  addChipset(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.model.style!.push(value);
    }
    event.chipInput!.clear();
  }

  removeChipset(titre: any): void {
    const index = this.model.style!.indexOf(titre);
    this.model.style!.splice(index, 1);
  }

  onFileSelected(event:Event | null) {
    const files = (<HTMLInputElement>event?.currentTarget).files;
    const file:File | null = files!.item(0);

    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.model.picture = reader.result;
        }
    }
  }

  /**
   * Fonction pour construire notre formulaire
   * @returns {FormGroup}
   *
   * @private
   */
  private static buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      prenom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      nom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      email: new FormControl('', Validators.required),
      titres: new FormControl(''),
      sexe: new FormControl(''),
      telephone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('\\d{10}')])),
    });
  }



}
