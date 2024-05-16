import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AllUsersResponse, SignleUserResponse } from '@app/Models/api-response';
import { Observable, map } from 'rxjs';

@Injectable()
export class UserService {
  http = inject(HttpClient);

  getUsers(page: number): Observable<AllUsersResponse> {
    return this.http
      .get<AllUsersResponse>(`https://reqres.in/api/users?page=${page}`)
      .pipe(map((response) => response));
  }

  getUserById(userId: number): Observable<SignleUserResponse> {
    return this.http
      .get<SignleUserResponse>(`https://reqres.in/api/users/${userId}`)
      .pipe(map((response) => response));
  }
}
