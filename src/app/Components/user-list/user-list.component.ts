import { Component, OnInit, inject } from '@angular/core';
import { User } from '@app/Models/user';
import { UserService } from '@app/Services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { SearchPipe } from '@app/Pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    RouterLink,
    MatPaginatorModule,
    SearchPipe,
    FormsModule,
    NgbPaginationModule,
    SlicePipe,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  userService = inject(UserService);
  router = inject(Router);

  userList: User[] | null = [];
  isLoading: boolean = false;
  userId: number | null = null;
  total_pages: number = 0;
  total: number = 0;
  page = 1;
  previousPageIndex = 0;
  per_page = 6;

  ngOnInit(): void {
    this.getAllUsers(this.page);
  }

  getAllUsers(page: number) {
    this.isLoading = true;
    this.userService.getUsers(page).subscribe({
      next: (res) => {
        this.total_pages = res.total_pages;
        this.total = res.total;
        this.page = res.page;
        this.per_page = res.per_page;

        this.userList = res.data;

        this.isLoading = false;
      },
    });
  }

  onPageChange(page: number) {
    this.getAllUsers(page);
  }

  openUserInfo(id: number) {
    this.router.navigate([`users/${id}`]);
  }
}
