import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];

  signupForm!: FormGroup;

  constructor() {}

  onSubmit() {
    console.log(this.signupForm);
    console.log('Username: ' + this.signupForm.value.username);
    console.log('Email: ' + this.signupForm.value.email);
    console.log('Secret Question: ' + this.signupForm.value.secret);
    console.log('Gender: ' + this.signupForm.value.gender);
    this.signupForm.reset({
      secret: 'pet',
      gender: 'male',
    });
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      secret: new FormControl('pet'),
      gender: new FormControl('male'),
    });
  }
}
