import { Component, OnInit, Input } from '@angular/core';
import { Settings, InputSettings } from './model/settings';

@Component({
  selector: 'app-input-auto-complete',
  templateUrl: './input-auto-complete.component.html',
  styleUrls: ['./input-auto-complete.component.scss']
})
export class InputAutoCompleteComponent implements OnInit {

  @Input() public settings: Settings;

  private errors: Array<{name: string, valid: boolean}> = [];

  constructor() {}

  ngOnInit() {
    this.createErrors();
  }

  public clickFunction(type: string) {
    switch(type) {
      case 'submit':
      this.submit();
      break;
      case 'reset':
      this.reset();
      break;
    }
  }

  private isValid(input: InputSettings): boolean {
    if(input.validation.requered){
      if(!input.validation.isEmpty){
        if(input.value.length === 0){
          return false;
        }
      }
      if(input.validation.patern){
        if(input.validation.patern.use){
          const re = new RegExp(input.validation.patern.patern);
          if(!re.test(input.value)){
            return false;
          }
        }
      }
    }
    return true;
  }

  private submit(): void {
    this.settings.rows.forEach(row => {
      row.inputs.forEach(input => {
        const index = this.errors.findIndex(item => item.name === input.name);
        this.interateErrors(input, index);
      });
    });
  }

  public changeValue(input: InputSettings, index: number){
    this.interateErrors(input, index);
  }

  private interateErrors(input: InputSettings, index: number){
    if(!this.isValid(input)){
      this.errors[index] = {name: input.name, valid: false};
    } else { this.errors[index] = {name: input.name, valid: true}; }
  }

  private reset(): void {
    this.resetErrors();
    this.settings.rows.forEach(row => {
      row.inputs.forEach(input => {
        input.value = '';
      });
    });
  }

  private resetErrors() {
    this.errors.forEach(error => error.valid = true)
  }
  private createErrors() {
    this.settings.rows.forEach(row => {
      row.inputs.forEach(input => {
        this.errors.push({name: input.name, valid: true});
      });
    });
  }


}
