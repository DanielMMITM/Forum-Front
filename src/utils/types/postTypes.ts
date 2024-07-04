import { Course } from './courseTypes';

export interface PostForm {
  title: string;
  text: string;
  userId: number;
  course: number;
}

export interface PostResponse {
  id: number;
  title: string;
  text: string;
  statusPost: string;
  userCreator: UserCreator;
  course: Course;
  answers: [];
  postDate: Date;
}

export interface PostsList {
  content: PostResponse[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  first: boolean;
  empty: boolean;
}

export interface UserCreator {
  id: number;
  username: string;
  email: string;
  role: string;
}
