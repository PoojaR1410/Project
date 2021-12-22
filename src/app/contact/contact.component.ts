import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  heroForm!: FormGroup;
  hero: any;
  

  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      alterEgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power, Validators.required)
    });
  
  }
  
  get name() { return this.heroForm.get('name'); }
  
  get power() { return this.heroForm.get('power'); }

}
function forbiddenNameValidator(arg0: RegExp): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

