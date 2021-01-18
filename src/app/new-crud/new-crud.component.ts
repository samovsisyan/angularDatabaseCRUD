import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user/user.service';
import {find} from 'rxjs/operators';

@Component({
  selector: 'app-new-crud',
  templateUrl: './new-crud.component.html',
  styleUrls: ['./new-crud.component.scss']
})
export class NewCrudComponent implements OnInit {

  public users;
  public usersId;
  public newUsers;
  public removeUsersId;
  // users = [
  //   {name: 'Bob', age: 25},
  //   {name: 'Joh', age: 31},
  //   {name: 'Alex', age: 27},
  // ];

  // public firstName;
  // public lastName;
  // public email;
  // public age;
  public editData;

  peopleForm: FormGroup;
  constructor(private _userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this._userService.getAll().subscribe(users => this.users = users);
    this.users = this._userService.getAll();
    this.peopleForm = this.fb.group({
      id: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  handleChange(): void {
    console.log(this.peopleForm.value);
    this._userService.getNewData(this.peopleForm.value).subscribe(newUser => this.newUsers = newUser);
    this.newUsers = this._userService.getNewData();
  }

  getId(): void {
    this._userService.getAll().subscribe(users => console.log(this.users.id = users));
    this.usersId = this._userService.getAll();
  }

  removeById(id): void {
    this._userService.removeDataById(id);
  }

  // onEnter(firstName: any, lastName: any, email: any, age: any): any {
  //   this.firstName = firstName;
  //   console.log('firstName...', firstName);
  //   this.lastName = lastName;
  //   console.log('lastName...', lastName);
  //   this.email = email;
  //   console.log('email...', email);
  //   this.age = age;
  //   console.log('age...', age);
  // }

  handleEditById(id: number): void {
    // console.log('userIDIDID', id);
    // this._userService.editDataById(id);
    this._userService.editDataById(id);
    // console.log('this.editData', this.editData);
  }
}
