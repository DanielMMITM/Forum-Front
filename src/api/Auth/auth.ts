import { axiosClient } from '@/config/axios';

export const loginRequest = async (body: Record<string, string>): Promise<LoginResponse> => {
  const { data } = await axiosClient.post('/auth/login', body);
  console.log(data);
  return data;
};

export const createUserRequest = async (body: Record<string, string>): Promise<SignUpResponse> => {
  const { data } = await axiosClient.post('/auth/signup', body);
  return data;
};
