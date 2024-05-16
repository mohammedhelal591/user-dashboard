import { User } from './user';

export interface AllUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface SignleUserResponse {
  data: User;
}
