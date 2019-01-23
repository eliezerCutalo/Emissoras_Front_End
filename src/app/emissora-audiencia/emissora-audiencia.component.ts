import { Component, OnInit } from '@angular/core';
import { Emissora } from '../_models/emissora.model';
import { Audiencia } from '../_models/audiencia.model';
import { MediaAudienciaEmissora } from '../_models/mediaAudienciaEmissora.model';
import { TotalAudienciaEmissora } from '../_models/totalAudienciaEmissora.model';
import { EmissoraService } from '../_services/emissora.service';
import { ToastrService } from 'ngx-toastr';
import { AudienciaService } from '../_services/audiencia.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'EA-emissora-audiencia',
  templateUrl: './emissora-audiencia.component.html',
})
export class EmissoraAudienciaComponent implements OnInit {

  mostrarMedia : boolean = false
  mostrarSoma : boolean = false
  data : Date = new Date()
  visaoAudiencia : string= ""
  emissoras : Emissora[]
  mediaAudienciaEmissoras: MediaAudienciaEmissora[]
  totalAudienciaEmissoras: TotalAudienciaEmissora[]

  constructor(public toaster: ToastrService,
              private audienciaService: AudienciaService) { }

  ngOnInit() {
  }

  Pesquisar(form: NgForm) {
    console.log(this.data, this.visaoAudiencia)
      this.audienciaService.getAudienciaEmissora(this.data, this.visaoAudiencia)
        .subscribe(data => {
          if(this.visaoAudiencia == "soma"){
            this.mostrarSoma = true
            this.mostrarMedia = false
            this.totalAudienciaEmissoras = data
          }
          if(this.visaoAudiencia == "media"){
            this.mostrarSoma = false
            this.mostrarMedia = true
            this.mediaAudienciaEmissoras = data
          }


        },
          error => {
            var res = JSON.parse(error._body)
            console.log(res);
            this.toaster.warning(res.mensagem)
          })
        }

}
