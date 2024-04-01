interface LoginForm {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  id: number;
}

interface SignUpForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
