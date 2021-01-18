import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  public users;
  public newUsers;
  // users = [
  //   {name: 'Bob', age: 25},
  //   {name: 'Joh', age: 31},
  //   {name: 'Alex', age: 27},
  // ];
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
}
