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
  userId: number;
  courseId: number;
  answers: [];
  postDate: Date;
}
