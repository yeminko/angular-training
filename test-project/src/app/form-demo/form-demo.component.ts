import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss'],
})
export class FormDemoComponent implements OnInit {
  genders = ['male', 'female'];

  defaultSecret = 'pet';
  defaultGender = 'male';

  constructor() {}

  onSubmit(form: NgForm) {
    console.log(form);
    console.log('Username: ' + form.value.username);
    console.log('Email: ' + form.value.email);
    console.log('Secret Question: ' + form.value.secret);
    console.log('Gender: ' + form.value.gender);
    form.reset({
      secret: this.defaultSecret,
      gender: this.defaultGender,
    });
  }

  ngOnInit(): void {}
}
