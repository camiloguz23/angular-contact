import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ListUserType, UserType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private url = 'https://cincoveinticinco.com/users.json';
  private usersSubject = new BehaviorSubject<UserType[]>([]);

  constructor(private http: HttpClient) {}

  getListUser(): Observable<UserType[]> {
    return this.http.get<ListUserType>(this.url).pipe(map((res) => res.users));
  }

  loadUsers() {
    this.getListUser().subscribe((users) => {
      this.usersSubject.next(users);
    });
  }

  // Método para agregar un nuevo usuario localmente
  addUser(newUser: UserType) {
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([...currentUsers, newUser]);
  }

  get users$(): Observable<UserType[]> {
    return this.usersSubject.asObservable();
  }
}
