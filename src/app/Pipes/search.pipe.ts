import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@app/Models/user';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(users: User[], userId: number): User[] {
    if (userId) {
      return users.filter((user) => user.id === userId);
    }

    return users;
  }
}
