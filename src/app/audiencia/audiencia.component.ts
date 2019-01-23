import { Component, OnInit } from '@angular/core';
import { EmissoraService } from '../_services/emissora.service';
import { AudienciaService } from '../_services/audiencia.service';
import { ToastrService } from 'ngx-toastr';
import { Audiencia } from '../_models/audiencia.model';
import { Emissora } from '../_models/emissora.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'EA-audiencia',
  templateUrl: './audiencia.component.html',
})
export class AudienciaComponent implements OnInit {

  emissoras : Emissora[]
  audienciaForm: Audiencia = new Audiencia(0, 0, new Date(), 0)
  constructor(private emissoraService: EmissoraService,
              private audienciaService: AudienciaService,
              public toaster: ToastrService) { }

  ngOnInit() {
    this.carregaComboEmissora()
  }
  carregaComboEmissora(){
      this.emissoraService.getEmissoras()
      .subscribe(
      (response) => {
        console.log(response)
        this.emissoras = response
      })
    }

    Limpar(){
      this.audienciaForm =new Audiencia(0, 0, new Date(), 0)

    }
    Salvar(form: NgForm) {
      console.log(this.audienciaForm)
      if(this.VerificaSeENumero(this.audienciaForm.pontos_Audiencia)){
        this.audienciaService.createAudiencia(this.audienciaForm)
          .subscribe(data => {
            this.Limpar();
            this.toaster.success("Dados salvos com sucesso");
  
          },
            error => {
              var res = JSON.parse(error._body)
              console.log(res);
              this.toaster.warning(res.mensagem)
            })
          }else{
            this.toaster.warning("Só são permitidos números no campo Pontos Audiência")
          }
      }

    VerificaSeENumero(n) : boolean{
      if(!isNaN(parseFloat(n)) && isFinite(n)){
        return true
      
      }else{
        return false
      }
    }
}
