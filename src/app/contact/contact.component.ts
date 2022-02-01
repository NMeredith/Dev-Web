import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {


  @ViewChild("titre") titre: ElementRef<HTMLElement> | undefined;
  @ViewChild("artiste") artiste: ElementRef<HTMLElement> | undefined;

  constructor() {
    //Vide

  }

  ngAfterViewInit(): void {
    this.titre!.nativeElement!.innerHTML = "ALED";
    this.artiste!.nativeElement!.innerHTML = "AUSECOURS";
    //Vide
    }

}
