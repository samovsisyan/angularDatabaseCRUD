import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public users = [
    {name: 'Bob', age: 25},
    {name: 'Joh', age: 31},
    {name: 'Alex', age: 27},
  ];
  public editUsers;

  constructor(private http: HttpClient) {
  }

  public getAll(): any {
    return this.http.get('http://localhost:3000/users');
    // return this.users;
  }

  public getNewData(data): any {
    return this.http.post('http://localhost:3000/users/', data);
  }

  public removeDataById(id): any {
    this.http.delete(`http://localhost:3000/users/${id}`)
      .subscribe(() => console.log('Delete successful'));
  }

  // public deleteAllData(): any {
  //   this.http.delete('http://localhost:3000/users/', options);
  // }

  public editDataById(id): any {
    console.log('IDIDIDIDIDIDID', id);
    return this.http.get(`http://localhost:3000/users/${id}`);
  }
}
