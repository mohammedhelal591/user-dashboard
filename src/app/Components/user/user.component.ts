import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@app/Models/user';
import { UserService } from '@app/Services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SignleUserResponse } from '@app/Models/api-response';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  userService = inject(UserService);
  activatedRoute = inject(ActivatedRoute);

  user!: User;
  userId!: number;

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];

    this.userService.getUserById(Number(this.userId)).subscribe({
      next: (res: SignleUserResponse) => {
        this.user = res.data;
      },
    });
  }

  back() {
    history.back();
  }
}
