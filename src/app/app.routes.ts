import { Routes } from '@angular/router';
import { UserService } from './Services/user.service';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  {
    path: 'users',
    loadComponent: () =>
      import('@app/Components/user-list/user-list.component').then(
        (c) => c.UserListComponent
      ),
    providers: [UserService],
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('@app/Components/user/user.component').then(
        (c) => c.UserComponent
      ),
    providers: [UserService],
  },
];
