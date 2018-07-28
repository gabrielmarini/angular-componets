import { Component } from '@angular/core';
import { Settings } from './input-auto-complete/model/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings: Settings = {
    buttons: [{
      label: 'Salvar',
      classCss: ['btn', 'btn-success'],
      type: 'submit'
    },{
      label: 'Limpar',
      classCss: ['btn', 'btn-default'],
      type: 'reset'
    }],
    rows: [{
      inputs: [
        {
          value: '',
          layout: ['col-md-4', 'col-sm-4'],
          label: 'Nome',
          placeholder: 'Ex.: João',
          name: 'nome',
          type: 'text',
          classCss: ['form-control', 'classs1'],
          id: 'nome',
          validation: {
            requered: true,
            isEmpty: false
          }
        },{
          value: '',
          layout: ['col-md-4', 'col-sm-4'],
          label: 'Sobrenome',
          placeholder: 'Ex.: Silva Melo',
          name: 'sobrenome',
          type: 'text',
          classCss: ['form-control', 'classs2'],
          id: 'sobrenome',
          validation: {
            requered: true,
            isEmpty: false
          }
        },{
          value: '',
          layout: ['col-md-4', 'col-sm-4'],
          label: 'Email',
          placeholder: 'Ex.: pedro@domain.com.br',
          name: 'email',
          type: 'text',
          classCss: ['form-control', 'classs2'],
          id: 'email',
          validation: {
            requered: true,
            isEmpty: false,
            patern: {
              use: true,
              patern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
          }
        }
      ]
    },
    {
      title: 'Endereço',
      inputs: [
        {
          value: '',
          layout: ['col-md-3', 'col-sm-6'],
          label: 'Logradouro',
          placeholder: 'Ex.: Av. interlagos',
          name: 'logradouro',
          type: 'text',
          classCss: ['form-control'],
          id: 'logradouro',
          validation: {
            requered: false,
            isEmpty: true
          }
        },{
          value: '',
          layout: ['col-md-3', 'col-sm-6'],
          label: 'Número',
          placeholder: 'Ex.: 3501',
          name: 'numero',
          type: 'text',
          classCss: ['form-control'],
          id: 'numero',
          validation: {
            requered: false,
            isEmpty: true
          }
        },{
          value: '',
          layout: ['col-md-3', 'col-sm-6'],
          label: 'Complmento',
          placeholder: '',
          name: 'complmento',
          type: 'text',
          classCss: ['form-control'],
          id: 'complmento',
          validation: {
            requered: false,
            isEmpty: true
          }
        },{
          value: '',
          layout: ['col-md-3', 'col-sm-6'],
          label: 'CEP',
          placeholder: 'Ex.: 04233-000',
          name: 'CEP',
          type: 'text',
          classCss: ['form-control'],
          id: 'CEP',
          validation: {
            requered: false,
            isEmpty: true
          }
        }
      ]
    }]
  }
}
