import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../providers/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {

  estaSobreElemento = false;
  archivos: FileItem[] = [];


  constructor( public _cargaImagenes: CargaImagenesService ) { }

  ngOnInit(): void {
  }

  cargarImagenes() {

    this._cargaImagenes.cargarImagenesFirebase( this.archivos );

  }

  limpiarImagenes() {

    this.archivos = [];
  }

  pruebaSobreElemento( evento ) {

    console.log( evento );

  }

}