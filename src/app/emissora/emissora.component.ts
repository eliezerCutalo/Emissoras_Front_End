import { Component, OnInit } from '@angular/core';
import { EmissoraService } from '../_services/emissora.service';
import { Emissora } from '../_models/emissora.model';
import { ToastrService } from 'ngx-toastr';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'EA-emissora',
  templateUrl: './emissora.component.html',
})
export class EmissoraComponent implements OnInit {

  emissoras: Emissora[]
  emissoraForm: Emissora = new Emissora(0, "")
  constructor(private emissoraService: EmissoraService,
    public toaster: ToastrService) { }

  ngOnInit() {
    this.Consultar();
  }

  Consultar() {
    this.emissoraService.getEmissoras()
      .subscribe(
        (response) => {
          console.log(response)
          this.emissoras = response
        })
  }

  Limpar() {
    this.emissoraForm = new Emissora(0, "")
    this.toaster.clear();
  }
  Excluir(id: number) {
    this.emissoraService.deleteEmissora(id)
      .subscribe(data => {
        this.Consultar();
        this.toaster.success("Dado excluído com sucesso");

      },
        error => {
          var res = JSON.parse(error._body)
          console.log(res);
          this.toaster.warning(res.mensagem)
        })
    console.log(id)
  }
  Editar(emissoraE: Emissora) {
    this.emissoraForm = new Emissora(emissoraE.id, emissoraE.nome)

  }

  Salvar(form: NgForm) {
    if (this.emissoraForm.id == 0) {
      this.emissoraService.createEmissora(this.emissoraForm)
        .subscribe(data => {
          this.Consultar();
          this.Limpar();
          this.toaster.success("Dados salvos com sucesso");

        },
          error => {
            var res = JSON.parse(error._body)
            console.log(res);
            this.toaster.warning(res.mensagem)
          })

    } else {
      this.emissoraService.updateEmissora(this.emissoraForm)
        .subscribe(data => {
          //console.log(data)
          this.Consultar();
          this.Limpar();
          this.toaster.success("Dados salvos com sucesso");

        },
          error => {
            var res = JSON.parse(error._body)
            console.log(res);
            this.toaster.warning(res.mensagem)
          })


    }
  }

}
