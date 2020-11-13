import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { User } from "../../entities/User"

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.scss']
})

export class LoginComponent implements OnInit {
   
    loginForm : FormGroup;
    isValid: boolean;

    users: Array<User>;

    constructor(private formBuilder : FormBuilder) {
        this.users = [new User("matheus", "Programmers"), new User("gean", "Developer")]
    }


    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username : ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login(): void {
        debugger;

        const typedUSername = this.loginForm.controls['username'].value
        const typedPassword = this.loginForm.controls['password'].value

        const isValidUser = this.users.filter((it) => {
            return (it.username == typedUSername && it.password == typedPassword)
        }).length > 0

        if(isValidUser) this.isValid = true
            else this.isValid = false
    }

}