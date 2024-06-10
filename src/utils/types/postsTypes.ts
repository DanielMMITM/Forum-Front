interface PostForm {
  title: string;
  text: string;
  userId: number;
  course: number;
}

interface PostResponse {
  id: number;
  title: string;
  text: string;
  statusPost: string;
  userCreator: UserCreator;
  courseId: number;
  answers: [];
  postDate: Date;
}

interface UserCreator {
  id: number;
  username: string;
  email: string;
  role: string;
}
