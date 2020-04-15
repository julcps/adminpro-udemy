import { Component, Inject, OnInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common' ;
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})

export class AccountSettingsComponent implements OnInit {

  constructor( public ajustes1: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ) {

    this.aplicarCheck( link );

    this.ajustes1.aplicarTema( tema );

  }

  aplicarCheck( link: any ) {

    const selectores: any = document.getElementsByClassName('selector');
    for ( const ref of selectores ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {

    const selectores: any = document.getElementsByClassName('selector');
    const tema  = this.ajustes1.ajustes.tema;

    for ( const ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }


  }

}
