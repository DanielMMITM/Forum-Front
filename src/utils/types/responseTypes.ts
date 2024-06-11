export interface Response {
  id: number;
  text: string;
  solution: boolean;
  postId: number;
  userCreator: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
  responseDate: string;
}
