import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  userSex: Array<String> = ['Женский', 'Мужской'];

  myForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
      this.myForm = formBuilder.group({
        userName: ["", [Validators.required]],
        userLastName: ["", [Validators.required]],
        userEmail: ["", [ Validators.required, Validators.email]],
        userPhone: ["", [Validators.required]],
        userSex: [, [Validators.required]],
        userAgree: [, [Validators.required]]
      });
    }
    submit() {
        console.log(this.myForm);
    }

  ngOnInit() {
  }

}
